<script setup lang="ts">
  import { ref, toRefs, reactive, watch } from 'vue'
  import type { ICluster } from '~/services/models'
  import { useClipboard } from '@vueuse/core'
  import companyRepository from '~/services/repository/companyRepository'
  import roleRepository from '~/services/repository/roleRepository'

  const loading = ref<boolean>(false)

  const userStore = useAuthStore()

  interface IProps {
    open: boolean
    isEditing?: boolean
    isLoading?: boolean
    item?: ICluster | unknown
    title?: string
  }

  const props = withDefaults(defineProps<IProps>(), {
    isEditing: false,
    isLoading: false,
    title: 'Добавление роль',
    item: () => ({})
  })

  const { open, isEditing, isLoading, item } = toRefs(props)

  const emits = defineEmits<{
    (e: 'close'): void
    (e: 'confirm', data: unknown): void
  }>()

  const clusterModal = ref(null)

  const handleOk = async () => {
    loading.value = true
    try {
      const validate = await clusterModal.value?.validateFields()
      if (validate && !validate.errorFields) {
        const request = {
          company_id: userStore.getUser.owner.id,
          role: formState.role
        }
        const response = await roleRepository.create(request)
        emits('confirm', response)
      }
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  const handleCancel = () => {
    emits('close')
  }

  interface FormState {
    role: string
  }

  const formState = reactive<FormState>({
    role: ''
  })
  const modal = ref(null)

  watch(
    () => item.value,
    newValue => {
      if (isEditing.value && newValue) {
        formState.role = newValue?.role ?? ''
      }
    },
    {
      immediate: true
    }
  )
</script>

<template>
  <a-modal :open="open" @cancel="handleCancel" @ok="handleOk">
    <template #title>
      <a-skeleton v-if="isLoading" :paragraph="{ rows: 0 }" active />
      <div v-else>{{ title }}</div>
    </template>
    <template #footer>
      <a-flex v-if="isEditing" justify="space-between" wrap="wrap">
        <a-button type="link" danger>Удалить пользователя</a-button>
        <a-button type="primary">Сохранить</a-button>
      </a-flex>
      <a-button v-else key="submit" type="primary" :loading="loading" @click="handleOk"
        >Добавить</a-button
      >
    </template>
    <a-space v-if="isLoading" class="w-[250px]" direction="vertical">
      <a-flex justify="space-between" wrap="wrap">
        <a-skeleton-input active />
      </a-flex>
      <a-flex justify="space-between" wrap="wrap">
        <a-skeleton-input active />
        <a-skeleton-button active />
      </a-flex>
      <a-flex justify="space-between" wrap="wrap">
        <a-skeleton-input class="flex-grow" active />
      </a-flex>
      <a-flex justify="space-between" wrap="wrap">
        <a-skeleton-input class="flex-grow" active />
        <a-skeleton-button active />
      </a-flex>
    </a-space>
    <a-form
      v-else
      ref="clusterModal"
      layout="vertical"
      :model="formState"
      name="basic"
      autocomplete="off"
    >
      <a-form-item
        name="role"
        class="w-[340px]"
        :rules="[{ required: true, message: 'Введите новую роль' }]"
      >
        <a-input
          v-model:value="formState.role"
          class="text-gray-400"
          placeholder="Название роли пользователя"
        >
        </a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
