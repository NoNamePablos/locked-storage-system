<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import companyRepository from '~/services/repository/companyRepository'
  import ClusterModal from '~/components/Cluster/ClusterModal.vue'

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
      const response = await companyRepository.show(userStore.getUser.company_id)
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
      const response = await companyRepository.users(userStore.getUser.company_id)
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
      name: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar'
    },
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role'
    },
    {
      title: 'Action',
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
      <a-table :columns="columns" :data-source="users">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Name </span>
          </template>
          <template v-if="column.key === 'id'">
            <span> ID </span>
          </template>
        </template>
      </a-table>
    </div>
    <company-modal
      :open="isOpenModal"
      :is-editing="isEditUser"
      :is-loading="isLoadingUser"
      :title="isEditUser ? 'Радактирование пользователя' : 'Добавление пользователя'"
      :item="editUser"
      @close="close()"
      @confirm="addUser($event)"
    />
  </div>
</template>

<style scoped></style>
