<script setup lang="ts">
  import { useAttrs, reactive, onUpdated } from 'vue'
  import BaseModal from '~/components/Base/BaseModal.vue'

  const attrs = useAttrs()

  interface FormState {
    username: string
    password: string
  }
  const modal = ref(null)
  const formState = reactive<FormState>({
    username: '',
    password: ''
  })

  const emits = defineEmits<{
    (e: 'submit'): void
  }>()

  const triggerModal = async () => {
    try {
      const validate = await modal.value.validateFields()
      if (!validate.errorFields) {
        emits('submit')
      }
    } catch (e) {
      console.log(e)
    }
  }

  onUpdated(() => {
    if (!attrs.open) {
      modal.value.resetFields()
    }
  })
</script>

<template>
  <base-modal v-bind="attrs" @submit="triggerModal()">
    <a-form ref="modal" layout="vertical" :model="formState" name="basic" autocomplete="off">
      <a-form-item
        label="Название кластера"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Пароль"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
    </a-form>
  </base-modal>
</template>
