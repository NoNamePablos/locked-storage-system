<script setup lang="ts">
  import BaseModal from '~/components/Base/BaseModal.vue'
  import AddingUsersCluster from '~/components/Cluster/AddingUsersCluster.vue'
  import { useAttrs, reactive, onUpdated, ref, type Ref } from 'vue'

  const attrs = useAttrs()

  interface FormState {
    users: any[]
  }
  const userModalCluser = ref(null)

  const formState = reactive<FormState>({
    users: []
  })

  const emits = defineEmits<{
    (e: 'submit'): void
  }>()

  const triggerModal = async () => {
    try {
      const validate = await userModalCluser.value?.validateFields()
      if (!validate.errorFields) {
        emits('submit')
      }
    } catch (e) {
      console.log(e)
    }
  }

  onUpdated(() => {
    if (!attrs.open) {
      userModalCluser.value?.resetFields()
    }
  })
</script>

<template>
  <base-modal v-bind="attrs" @submit="triggerModal()">
    <a-form
      ref="userModalCluser"
      layout="vertical"
      :model="formState"
      name="basic"
      autocomplete="off"
    >
      <a-form-item label="Пользователи" name="users">
        <adding-users-cluster />
      </a-form-item>
    </a-form>
  </base-modal>
</template>

<style scoped></style>
