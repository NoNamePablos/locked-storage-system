<script setup lang="ts">
  import { ref, toRefs, reactive, watch } from 'vue'
  import { Home, LockKeyhole } from 'lucide-vue-next'
  import LeakPasswordForm from '~/components/Forms/LeakPasswordForm.vue'
  import type { ICluster } from '~/services/models'
  import { useClipboard } from '@vueuse/core'
  import GeneratePasswordForm from '~/components/Forms/GeneratePasswordForm.vue'
  import type { IUser } from '~/services/models/user'
  import clusterRepository from '~/services/repository/clusterRepository'
  import companyRepository from '~/services/repository/companyRepository'
  import personalRepository from '~/services/repository/personalRepository'
  import roleRepository from '~/services/repository/roleRepository'
  import { message } from 'ant-design-vue'

  const loading = ref<boolean>(false)

  const userStore = useAuthStore()

  interface IProps {
    open: boolean
    isEditing?: boolean
    isLoading?: boolean
    item?: ICluster | unknown
    title?: string
    roles: unknown[]
  }

  const props = withDefaults(defineProps<IProps>(), {
    isEditing: false,
    isLoading: false,
    title: 'Добавление пользователя',
    item: () => ({})
  })

  const { copy } = useClipboard()
  const { open, isEditing, isLoading, item, roles } = toRefs(props)

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
          password: formState.password,
          name: formState.username,
          email: formState.email,
          confirm_password: formState.password,
          role: 'user'
        }
        const registerUser = await companyRepository.registerUser(request)
        if (!registerUser) {
          message.error(`Пользователь уже зарегистрирован!`)
        } else {
          const addUserRequest = {
            company_id: userStore.getUser.owner.id,
            user_id: registerUser?.data?.user?.id ?? null
          }
          const response = await companyRepository.addUser(addUserRequest)
          await roleRepository.addRoleToUser({
            role_id: formState.role,
            user_id: registerUser.data.user.id
          })
          emits('confirm', response)
        }
      }
    } catch (error) {
      message.error(`Непредвиденная ошибка`)
    } finally {
      loading.value = false
    }
  }

  const handleCancel = () => {
    emits('close')
  }

  interface FormState {
    username: string
    email: string
    password: string
    role: number | null
  }

  const formState = reactive<FormState>({
    username: '',
    email: '',
    password: '',
    role: null
  })

  const modal = ref(null)
  const leaksFormRef = ref(null)
  const generateFormRef = ref(null)

  watch(
    () => item.value,
    newValue => {
      console.log(newValue)
      if (isEditing.value && newValue) {
        formState.username = newValue?.name ?? ''
        formState.email = newValue?.email ?? ''
        formState.role = roles.value.find(item => item.role === newValue?.company_role).id
        formState.password = newValue?.password ?? ''
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
        formState.username = ''
        formState.email = ''
        formState.password = ''
      }
      if (!newVal) {
        clusterModal.value.resetFields()
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

  const handleChange = (value: number) => {
    console.log(`selected ${value}`)
    formState.role = value
  }
  const filterOption = (input: string, option: any) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }

  const computedRoles = computed(() => {
    return roles.value.map(item => ({
      label: item.role,
      value: item.id
    }))
  })
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
        >Добавить пользователя</a-button
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
        name="username"
        class="w-[340px]"
        :rules="[{ required: true, message: 'Введите имя пользователя' }]"
      >
        <a-input
          v-model:value="formState.username"
          class="text-gray-400"
          placeholder="Имя пользователя"
        >
          <template #prefix>
            <home :size="20" color="currentColor" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        name="email"
        :rules="{ required: true, type: 'email', message: 'Введите E-mail!' }"
      >
        <a-input v-model:value="formState.email" placeholder="E-mail">
          <template #prefix>
            <mail-outlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="role" :rules="{ required: true, message: 'Выберите роль' }">
        <a-select
          v-model:value="formState.role"
          show-search
          placeholder="Выберите роль"
          :options="computedRoles"
          :filter-option="filterOption"
          @change="handleChange"
        ></a-select>
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
      <leak-password-form v-if="isCheckLeaksPassword" ref="leaksFormRef" class="my-4" />
      <generate-password-form v-if="isGeneratePassword" ref="generateFormRef" class="my-4" />
    </a-form>
  </a-modal>
</template>

<style scoped></style>
