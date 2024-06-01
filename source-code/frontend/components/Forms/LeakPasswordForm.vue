<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import personalRepository from '~/services/repository/personalRepository'

  interface FormState {
    password: string
  }
  const modalRef = ref(null)
  const formState = reactive<FormState>({
    password: ''
  })

  const leakInfo = ref(null)

  const isLoading = ref(false)

  const emits = defineEmits<{
    (e: 'submit'): void
  }>()

  const resetForm = () => {
    modalRef.value.resetFields()
  }

  const onFinish = async () => {
    isLoading.value = true
    try {
      const response = await personalRepository.checkPassword(formState.password)
      leakInfo.value = response
    } catch (e) {
      console.log(e)
    }
    isLoading.value = false
  }

  defineExpose({ resetForm })
</script>

<template>
  <div class="border-dashed border-gray-400 p-3 rounded">
    <div class="font-medium text-xl">Проверка пароля</div>
    <a-form
      ref="modalRef"
      layout="vertical"
      :model="formState"
      name="basic"
      class="mt-3"
      autocomplete="off"
    >
      <a-form-item name="password">
        <a-input
          v-model:value="formState.password"
          allow-clear
          placeholder="Введите пароль для проверки"
        />
      </a-form-item>
      <a-alert v-if="leakInfo && !leakInfo?.enters" :message="leakInfo?.status" type="success" />
      <a-alert v-if="leakInfo && leakInfo?.enters" message="Проверка пароля" type="error">
        <template #description>
          <p>
            {{ leakInfo?.status }}
            <span style="color: red">{{ leakInfo?.enters }}</span>
          </p>
        </template>
      </a-alert>
    </a-form>
    <a-flex>
      <a-button
        :loading="isLoading"
        :disabled="!formState.password.length"
        type="primary"
        class="mt-2"
        @click="onFinish"
        >Проверить</a-button
      >
    </a-flex>
  </div>
</template>

<style scoped></style>
