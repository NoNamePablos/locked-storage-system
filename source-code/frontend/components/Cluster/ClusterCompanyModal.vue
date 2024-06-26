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
  import ClustersUsersList from '~/components/Cluster/ClustersUsersList.vue'
  import companyClusterRepository from '~/services/repository/companyClusterRepository'

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
    title: 'Добавление хранилища',
    item: () => ({})
  })

  const { copy } = useClipboard()
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
          name: formState.name,
          company_id: userStore.getUser.owner.id ?? userStore.user.company.id,
          ...(!isEditing.value && {
            password: formState.password
          }),
          ...(isEditing.value && {
            new_password: formState.new_password,
            new_password_confirm: formState.new_password,
            cluster_id: item.value?.id,
            password: formState.password
          })
        }

        console.log(request)

        const method = isEditing.value
          ? companyClusterRepository.update
          : companyClusterRepository.create
        const methodUser = isEditing.value
          ? companyRepository.storeUserToCluster
          : companyRepository.storeUserToCluster
        const response = await method(request)
        console.log(response)
        if (usersClustersList.value.length) {
          for (const user of usersClustersList.value) {
            console.log('addd user: ', user)
            const req = {
              ...user,
              user_id: user.id ?? user.user_id,
              cluster_id: response.id
            }
            await methodUser(req)
          }
        }
        console.log(usersClustersList.value)
        emits('confirm', response)
      }
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  const deleteCluster = async () => {
    try {
      const response = await clusterRepository.delete(item.value?.id)
      console.log(response)
      handleCancel()
    } catch (e) {
      console.log(e)
    }
  }

  const handleCancel = () => {
    emits('close')
  }

  interface FormState {
    name: string
    password: string
    new_password?: string
    users: IUser[] | null
  }
  const modal = ref(null)
  const leaksFormRef = ref(null)
  const generateFormRef = ref(null)

  const formState = reactive<FormState>({
    name: '',
    password: '',
    new_password: '',
    users: null
  })

  watch(
    () => item.value,
    async newValue => {
      if (isEditing.value && newValue) {
        formState.name = newValue?.name ?? ''
        formState.password = newValue?.password ?? ''
        formState.new_password = ''
        formState.users = newValue?.users ?? null
      }
    },
    {
      immediate: true
    }
  )

  watch(
    () => open.value,
    async newVal => {
      if (newVal) {
        formState.name = ''
        formState.password = ''
        formState.users = null
        formState.new_password = ''
      }
      if (isEditing.value) {
        console.log('item od: ', item.value?.id)
        await fetchClusterUser(item.value?.id)
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

  const usersIsLoading = ref(false)
  const usersList = ref([])

  const fetchUsers = async () => {
    usersIsLoading.value = true
    try {
      const response = await companyRepository.users(
        userStore.getUser.owner?.id ?? userStore.user.company.id
      )
      usersList.value = response.users
    } catch (e) {
      console.log(e)
    } finally {
      usersIsLoading.value = false
    }
  }

  const fetchClusterUser = async clusterId => {
    usersIsLoading.value = true
    try {
      const response = await companyRepository.fetchUserClusters({
        cluster_id: clusterId
      })
      console.log('rsL ', response)
      const test = response.reduce((acc, cur) => {
        acc.push({
          ...cur.users,
          delete_id: cur.id,
          is_reader: !!cur.is_reader,
          is_redactor: !!cur.is_redactor
        })
        return acc
      }, [])
      console.log('test: ', test)
      usersClustersList.value = test
    } catch (e) {
      console.log(e)
    }
    usersIsLoading.value = false
  }

  const usersClustersList = ref([])

  const addUserToClusterList = data => {
    usersClustersList.value.push(data)
  }

  const onChangeUsersCluster = data => {
    const findUser = usersClustersList.value.find(item => item.user_id === data.record.user_id)
    if (findUser) {
      findUser[data.key] = !findUser[data.key]
    }
  }

  const onDeleteUsersCluster = async data => {
    usersClustersList.value = usersClustersList.value.filter(item => item.user_id !== data.user_id)
    usersIsLoading.value = true
    try {
      const response = await companyRepository.deleteUserFormCluster(data.delete_id)
      await fetchClusterUser(item.value?.id)
      console.log('delt: ', response)
    } catch (e) {
      console.log(e)
    }
    usersIsLoading.value = false
  }

  onMounted(async () => {
    await userStore.profile()
    await fetchUsers()
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
        <a-button type="link" danger @click="deleteCluster()">Удалить хранилище</a-button>
        <a-button type="primary" @click="handleOk()">Сохранить</a-button>
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
    <a-form
      v-else
      ref="clusterModal"
      layout="vertical"
      :model="formState"
      name="basic"
      autocomplete="off"
    >
      <a-form-item
        name="name"
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
          :class="isEditing ? 'w-full' : 'w-[340px]'"
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
        <a-form-item
          v-if="isEditing"
          :class="isEditing ? 'w-full' : 'w-[340px]'"
          name="new_password"
        >
          <a-input-password
            v-model:value="formState.new_password"
            class="text-gray-400"
            placeholder="Введите новый пароль"
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
      </a-flex>
      <a-flex vertical>
        <div class="mb-2 font-bold">Доступ для сотрудников</div>
        <clusters-users-list
          v-if="usersClustersList.length"
          :users="usersClustersList"
          @change-user="onChangeUsersCluster"
          @delete="onDeleteUsersCluster"
        />
        <cluster-users-select
          :users="usersList"
          :is-loading="usersIsLoading"
          @confirm="addUserToClusterList($event)"
        />
      </a-flex>
      <leak-password-form v-if="isCheckLeaksPassword" ref="leaksFormRef" class="my-4" />
      <generate-password-form v-if="isGeneratePassword" ref="generateFormRef" class="my-4" />
    </a-form>
  </a-modal>
</template>

<style scoped></style>
