<script setup lang="ts">
  import { message } from 'ant-design-vue'
  import { defineAsyncComponent, ref } from 'vue'
  import { useRouter } from '#imports'
  import companyRepository from '~/services/repository/companyRepository'

  const router = useRouter()
  const current = ref<number>(0)
  const companyInfoForm = ref(null)
  const isShowPrev = ref(true)
  const userStore = useAuthStore()
  const isLoading = ref<boolean>(false)

  const next = () => {
    if (steps[current.value].key === 'index') {
      current.value++
    }
    if (steps[current.value].key == 'form') {
      companyInfoForm.value?.validate()
    }
  }

  const onValidate = async data => {
    isLoading.value = true
    try {
      const request = {
        owner_id: userStore.getUser.id,
        name: data?.title ?? '',
        description: data?.description ?? ''
      }
      const response = await companyRepository.register(request)
      await userStore.profile()
      current.value++
      isShowPrev.value = false
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  const prev = () => {
    current.value--
  }
  const steps = [
    {
      title: 'Добро пожаловать!',
      key: 'index',
      content: defineAsyncComponent(() => import('~/components/Steps/StepOne.vue'))
    },
    {
      title: 'Заполнение данных',
      key: 'form',
      content: defineAsyncComponent(() => import('~/components/Steps/StepTwo.vue'))
    },
    {
      title: 'Завершение',
      key: 'end',
      content: defineAsyncComponent(() => import('~/components/Steps/StepThree.vue'))
    }
  ]
  const items = steps.map(item => ({ key: item.title, title: item.title }))
  const success = () => {
    message
      .loading('Пожалуйста,подождите..', 2.5)
      .then(
        () => message.success('Регистрация прошла успешно!', 0.2),
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {}
      )
      .then(() => router.push({ path: '/platform/records' }))
  }
</script>

<template>
  <div class="h-full overflow-hidden">
    <div class="mt-6 px-6">
      <a-steps :current="current" :items="items"></a-steps>
    </div>
    <div class="h-full flex flex-col items-center justify-center">
      <component :is="steps[current].content" v-if="steps[current].key !== 'form'" />
      <component
        :is="steps[current].content"
        v-else
        ref="companyInfoForm"
        @validate="onValidate($event)"
      />
      <div class="steps-action mt-4">
        <a-button
          v-if="current < steps.length - 1"
          type="primary"
          :disabled="isLoading"
          @click="next"
          >Далее</a-button
        >
        <a-button v-if="current == steps.length - 1" type="primary" @click="success()">
          Готово
        </a-button>
        <a-button
          v-if="current > 0 && isShowPrev"
          :disabled="isLoading"
          style="margin-left: 8px"
          @click="prev"
          >Назад</a-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
