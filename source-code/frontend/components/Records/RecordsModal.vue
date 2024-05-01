<script setup lang="ts">
  import { ref, toRefs, reactive, watch } from 'vue'
  import { Home, Globe, User, LockKeyhole, Info } from 'lucide-vue-next'

  const loading = ref<boolean>(false)

  interface IProps {
    open: boolean
  }

  const props = defineProps<IProps>()
  const { open } = toRefs(props)

  const emits = defineEmits<{
    (e: 'close'): void
    (e: 'confirm', data: unknown): void
  }>()

  const handleOk = () => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      //async-await request to back
      emits('close')
    }, 2000)
  }

  const handleCancel = () => {
    emits('close')
  }

  interface FormState {
    title: string
    site: string
    login: string
    password: string
  }
  const modal = ref(null)
  const formState = reactive<FormState>({
    title: '',
    site: '',
    login: '',
    password: ''
  })

  watch(
    () => open.value,
    newVal => {
      if (!newVal) {
        modal.value.resetFields()
      }
    }
  )
</script>

<template>
  <a-modal :open="open" title="Добавление пароля" @cancel="handleCancel" @ok="handleOk">
    <template #footer>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk"
        >Добавить пароль</a-button
      >
    </template>
    <a-form ref="modal" layout="vertical" :model="formState" name="basic" autocomplete="off">
      <a-form-item
        name="title"
        class="w-[340px]"
        :rules="[{ required: true, message: 'Введите название сайта/сервиса' }]"
      >
        <a-input
          v-model:value="formState.title"
          class="text-gray-400"
          placeholder="Название сайта/сервиса"
        >
          <template #prefix>
            <home :size="20" color="currentColor" />
          </template>
        </a-input>
      </a-form-item>
      <a-flex wrap="wrap" :gap="4">
        <a-form-item
          class="w-[340px]"
          name="site"
          :rules="[{ required: true, message: 'Введите URL' }]"
        >
          <a-input v-model:value="formState.site" class="text-gray-400" placeholder="URL">
            <template #prefix>
              <globe :size="20" color="currentColor" />
            </template>
            <template #suffix>
              <a-tooltip>
                <template #title>
                  <span class="text-center block">Вводите полный адрес https://vk.com</span>
                </template>
                <info :size="20" color="currentColor" />
              </a-tooltip>
            </template>
          </a-input>
        </a-form-item>
        <a-button type="primary" class="flex-grow" ghost>Вставить</a-button>
      </a-flex>
      <a-form-item
        class="w-[340px]"
        name="login"
        :rules="[{ required: true, message: 'Введите логин/Email' }]"
      >
        <a-input
          v-model:value="formState.login"
          class="text-gray-400"
          placeholder="Введите логин/Email"
        >
          <template #prefix>
            <user :size="20" color="currentColor" />
          </template>
        </a-input>
      </a-form-item>
      <a-flex wrap="wrap" :gap="4">
        <a-form-item
          class="flex-grow w-[340px]"
          name="password"
          :rules="[{ required: true, message: 'Введите пароль' }]"
        >
          <a-input-password
            v-model:value="formState.password"
            class="text-gray-400"
            placeholder="Введите пароль"
          >
            <template #prefix>
              <lock-keyhole :size="20" color="currentColor" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-button type="primary" ghost>Генерировать</a-button>
      </a-flex>
    </a-form>
  </a-modal>
</template>

<style scoped></style>
