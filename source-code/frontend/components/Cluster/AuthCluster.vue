<script setup lang="ts">
  import BaseModal from '~/components/Base/BaseModal.vue'
  import { onUpdated, reactive, useAttrs, toRefs, ref } from 'vue'
  import clusterRepository from '~/services/repository/clusterRepository'

  const attrs = useAttrs()

  interface IProps {
    type: string | number
    clusterId: number
    loading: boolean
  }
  const props = defineProps<IProps>()

  const userStore = useAuthStore()
  const { clusterId, type } = toRefs(props)
  const isLoading = ref(false)

  const fetchRecordsById = async () => {
    isLoading.value = true
    try {
      const response = await clusterRepository.findById({
        user_id: userStore.getUser.id,
        password: formState.password,
        cluster_id: clusterId.value
      })
      emits('submit', { data: response, type: type.value })
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  interface FormState {
    password: string
  }
  const modalAuth = ref(null)
  const formState = reactive<FormState>({
    password: ''
  })

  const emits = defineEmits<{
    (e: 'submit', data: unknown): void
  }>()

  const triggerModal = async () => {
    try {
      const validate = await modalAuth.value.validateFields()
      if (!validate.errorFields) {
        await fetchRecordsById()
        /*const data = { password: formState.password, type: props.type }
        emits('submit', data)*/
      }
    } catch (e) {
      console.log(e)
    }
  }

  onUpdated(() => {
    if (!attrs.open) {
      modalAuth.value?.resetFields()
    }
  })
</script>

<template>
  <base-modal v-bind="attrs" @submit="triggerModal()">
    <a-form ref="modalAuth" layout="vertical" :model="formState" name="basic" autocomplete="off">
      <a-form-item
        name="password"
        :rules="[{ required: true, message: 'Пожалуйста введите пароль от хранилища' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
    </a-form>
  </base-modal>
</template>

<style scoped></style>
