<script setup lang="ts">
  import { ref, toRefs, reactive, watch } from 'vue'
  import { Home, LockKeyhole } from 'lucide-vue-next'
  import LeakPasswordForm from '~/components/Forms/LeakPasswordForm.vue'
  import type { ICluster } from '~/services/models'
  import { useClipboard } from '@vueuse/core'
  import GeneratePasswordForm from '~/components/Forms/GeneratePasswordForm.vue'
  import type { IUser } from '~/services/models/user'

  const loading = ref<boolean>(false)

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
    title: 'Добавление хранилища',
    item: () => ({})
  })

  const { copy } = useClipboard()
  const { open, isEditing, isLoading, item } = toRefs(props)

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
    name: string
    password: string
    users: IUser[] | null
  }
  const modal = ref(null)
  const leaksFormRef = ref(null)
  const generateFormRef = ref(null)

  const formState = reactive<FormState>({
    name: '',
    password: '',
    users: null
  })

  watch(
    () => item.value,
    newValue => {
      console.log(newValue)
      if (isEditing.value && newValue) {
        formState.name = newValue?.name ?? ''
        formState.password = newValue?.password ?? ''
        formState.users = newValue?.users ?? null
      }
    },
    {
      immediate: true
    }
  )

  watch(
    () => open.value,
    newVal => {
      if (newVal) {
        formState.name = ''
        formState.password = ''
        formState.users = null
      }
      if (!newVal) {
        modal.value.resetFields()
        if (isCheckLeaksPassword.value) {
          leaksFormRef.value.resetForm()
          isCheckLeaksPassword.value = false
        }
        if (isGeneratePassword.value) {
          generateFormRef.value.resetForm()
          isGeneratePassword.value = false
        }
      }
    }
  )

  const isCheckLeaksPassword = ref(false)
  const isGeneratePassword = ref(false)
  const toggleGeneratePassword = () => {
    isGeneratePassword.value = !isGeneratePassword.value
  }
  const toggleLeaksPassword = () => {
    isCheckLeaksPassword.value = !isCheckLeaksPassword.value
  }

  const copyText = data => {
    try {
      copy(data)
      message.success('Данные скопированы')
    } catch (e) {
      message.error('Ошибка копирования')
    }
  }
</script>

<template>
  <a-modal :open="open" @cancel="handleCancel" @ok="handleOk">
    <template #title>
      <a-skeleton v-if="isLoading" :paragraph="{ rows: 0 }" active />
      <div v-else>{{ title }}</div>
    </template>
    <template #footer>
      <a-flex v-if="isEditing" justify="space-between" wrap="wrap">
        <a-button type="link" danger>Удалить хранилище</a-button>
        <a-button type="primary">Сохранить</a-button>
      </a-flex>
      <a-button v-else key="submit" type="primary" :loading="loading" @click="handleOk"
        >Добавить хранилище</a-button
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
    <a-form v-else ref="modal" layout="vertical" :model="formState" name="basic" autocomplete="off">
      <a-form-item
        name="title"
        class="w-[340px]"
        :rules="[{ required: true, message: 'Введите название хранилища' }]"
      >
        <a-input
          v-model:value="formState.name"
          class="text-gray-400"
          placeholder="Название хранилища"
        >
          <template #prefix>
            <home :size="20" color="currentColor" />
          </template>
        </a-input>
      </a-form-item>
      <a-flex wrap="wrap" :gap="4">
        <a-form-item
          class="w-[340px]"
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
        <a-flex v-if="!isEditing" vertical :gap="4">
          <a-button type="primary" class="flex-grow" ghost @click="toggleLeaksPassword()"
            >Проверить</a-button
          >
          <a-button type="primary" class="flex-grow" ghost @click="toggleGeneratePassword()"
            >Генерировать</a-button
          >
        </a-flex>

        <a-button
          v-else
          type="primary"
          class="flex-grow"
          ghost
          @click="copyText(formState.password)"
          >Скопировать</a-button
        >
      </a-flex>
      <a-flex vertical>
        <div class="mb-2 font-bold">Доступ для сотрудников</div>
        <cluster-users-select />
      </a-flex>
      <leak-password-form v-if="isCheckLeaksPassword" ref="leaksFormRef" class="my-4" />
      <generate-password-form v-if="isGeneratePassword" ref="generateFormRef" class="my-4" />
    </a-form>
  </a-modal>
</template>

<style scoped></style>
