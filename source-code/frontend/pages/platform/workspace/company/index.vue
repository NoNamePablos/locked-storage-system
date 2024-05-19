<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import companyRepository from '~/services/repository/companyRepository'
  import ClusterModal from '~/components/Cluster/ClusterModal.vue'
  import { ECardsView } from '~/services/enums'
  import { AlignJustify, Grip, Search } from 'lucide-vue-next'

  definePageMeta({
    layout: 'platform-layout',
    middleware: ['auth']
  })

  const isLoading = ref<boolean>(false)
  const userStore = useAuthStore()
  const company = ref(null)
  const users = ref([])

  const fetchCompany = async () => {
    isLoading.value = true
    try {
      const response = await companyRepository.show(userStore.getUser.owner.id)
      company.value = response
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  const fetchUsers = async () => {
    isLoading.value = true
    try {
      const response = await companyRepository.users(userStore.getUser.owner.id)
      console.log(response)
      users.value = response.users
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(async () => {
    await userStore.profile()
    await fetchCompany()
    await fetchUsers()
  })

  const columns = [
    {
      name: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      name: 'Имя',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Роль',
      key: 'role',
      dataIndex: 'role'
    },
    {
      title: 'Действия',
      key: 'action'
    }
  ]

  const isOpenModal = ref(false)
  const isEditUser = ref(false)
  const isLoadingUser = ref(false)
  const editUser = ref(null)

  const addUser = data => {
    console.log(data)
  }

  const close = () => {
    isOpenModal.value = false
    isEditUser.value = false
    editUser.value = null
  }

  const open = () => {
    isOpenModal.value = true
  }

  const deleteUser = async (id: number) => {
    try {
      const addUserRequest = {
        company_id: userStore.getUser.owner.id,
        user_id: id
      }
      const response = await companyRepository.deleteUser(addUserRequest)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  const search = ref('')

  const onSearch = async (data: string) => {
    try {
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
</script>

<template>
  <div class="h-full">
    <platform-header class="mt-4" :title="`Компания ${company?.name ?? ''}`">
      <template #right>
        <a-button type="primary" size="middle" :icon="h(PlusOutlined)" @click="open()"
          >Добавить пользователя</a-button
        >
      </template>
    </platform-header>
    <div>
      <div
        class="mt-4 pb-6 px-4 flex w-full items-center flex-wrap justify-between border-solid border-transparent border-b-gray-200 border-0 border-b-[1px]"
      >
        <div class="max-w-[400px] mt-4 w-full">
          <div class="border-solid border-0 border-b-2 border-gray-400">
            <a-input
              v-model:value="search"
              :bordered="false"
              placeholder="Поиск..."
              class="text-gray-400"
              @change="onSearch($event.target.value)"
            >
              <template #prefix>
                <search :size="16" color="currentColor" />
              </template>
            </a-input>
          </div>
        </div>
        <div>
          <span>Сортировка</span>
        </div>
      </div>
      <a-table :columns="columns" :data-source="users">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Имя </span>
          </template>
          <template v-if="column.key === 'id'">
            <span> ID </span>
          </template>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-button type="link" danger @click="deleteUser(record.id)">Удалить</a-button>
            <a-button type="link" @click="deleteUser(record.id)">Редактировать</a-button>
          </template>
        </template>
      </a-table>
    </div>
    <company-modal
      :open="isOpenModal"
      :is-editing="isEditUser"
      :is-loading="isLoadingUser"
      :title="isEditUser ? 'Радактировать пользователя' : 'Добавление пользователя'"
      :item="editUser"
      @close="close()"
      @confirm="addUser($event)"
    />
  </div>
</template>

<style scoped></style>
