<script setup lang="ts">
  import BaseModal from '~/components/Base/BaseModal.vue'
  import { onUpdated, reactive, useAttrs, toRefs, ref } from 'vue'

  const attrs = useAttrs()

  interface IProps {
    id: string | number
  }
  const props = defineProps<IProps>()

  const { id } = toRefs(props)

  interface FormState {
    password: string
  }
  const modalAuth = ref(null)
  const formState = reactive<FormState>({
    password: ''
  })

  const emits = defineEmits<{
    (e: 'submit', data: string | number): void
  }>()

  const triggerModal = async () => {
    try {
      const validate = await modalAuth.value.validateFields()
      if (!validate.errorFields) {
        emits('submit', id.value)
      }
    } catch (e) {
      console.log(e)
    }
  }

  onUpdated(() => {
    if (!attrs.open) {
      modalAuth.value.resetFields()
    }
  })
</script>

<template>
  <base-modal v-bind="attrs" @submit="triggerModal()">
    <a-form ref="modalAuth" layout="vertical" :model="formState" name="basic" autocomplete="off">
      <a-form-item
        name="password"
        :rules="[{ required: true, message: 'Please input correct password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
    </a-form>
  </base-modal>
</template>

<style scoped></style>
