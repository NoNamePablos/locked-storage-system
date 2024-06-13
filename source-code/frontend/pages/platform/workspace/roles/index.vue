<script setup lang="ts">
  import { definePageMeta, Modal } from '#imports'
  import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
  import companyRepository from '~/services/repository/companyRepository'
  import { Search } from 'lucide-vue-next'
  import { h } from 'vue'
  import roleRepository from '~/services/repository/roleRepository'
  import clusterRepository from '~/services/repository/clusterRepository'

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

  const fetchRoles = async () => {
    isLoading.value = true
    try {
      const response = await roleRepository.list(userStore.getUser.owner.id)
      users.value = response
      console.log('roles: ', users.value)
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(async () => {
    await userStore.profile()
    await fetchCompany()
    await fetchRoles()
  })

  const columns = [
    {
      name: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      name: 'Роль',
      dataIndex: 'role',
      key: 'role'
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

  const addRole = async data => {
    try {
      close()
      await fetchRoles()
    } catch (e) {
      console.log(e)
    }
  }

  const close = () => {
    isOpenModal.value = false
    isEditUser.value = false
    editUser.value = null
  }

  const open = () => {
    isOpenModal.value = true
  }

  const onDelete = async role => {
    Modal.confirm({
      title: `Вы точно хотите удалить пользователя ${role.role}?`,
      icon: h(ExclamationCircleOutlined),
      async onOk() {
        try {
          await deleteRole(role.id)
          await fetchRoles()
        } catch (e) {
          console.log(e)
        }
      },
      onCancel() {}
    })
  }

  const deleteRole = async (id: number) => {
    try {
      const addUserRequest = {
        role_id: id
      }
      const response = await roleRepository.delete(addUserRequest)
      await fetchRoles()
    } catch (e) {
      console.log(e)
    }
  }

  const search = ref('')

  const editRole = async (id: number) => {
    isLoadingUser.value = true
    try {
      const response = users.value.find(item => item.id === id)
      console.log(response)
      if (response) {
        isOpenModal.value = true
        isEditUser.value = true
        editUser.value = response
      }
    } catch (e) {
      console.log(e)
    }
    isLoadingUser.value = false
  }

  const onSearch = async data => {
    isLoadingUser.value = true
    try {
      if (!data.length) {
        await fetchRoles()
      } else {
        const response = await roleRepository.searchRoles({
          find: data,
          company_id: userStore.getUser.owner.id
        })
        console.log(response)
        users.value = response
      }
    } catch (e) {
      console.log(e)
    } finally {
      isLoadingUser.value = false
    }
  }
</script>

<template>
  <div class="h-full">
    <platform-header class="mt-4" title="Роли">
      <template #right>
        <a-button type="primary" size="middle" :icon="h(PlusOutlined)" @click="open()"
          >Добавить роль</a-button
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
                <Search :size="16" color="currentColor" />
              </template>
            </a-input>
          </div>
        </div>
      </div>
      <a-table :columns="columns" :data-source="users">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'id'">
            <span> ID </span>
          </template>
          <template v-if="column.key === 'role'">
            <span> Роль </span>
          </template>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-button type="link" danger @click="onDelete(record)">Удалить</a-button>
            <a-button type="link" @click="editRole(record.id)">Редактировать</a-button>
          </template>
        </template>
      </a-table>
    </div>
    <roles-modal
      :open="isOpenModal"
      :is-editing="isEditUser"
      :is-loading="isLoadingUser"
      :title="isEditUser ? 'Радактировать роль' : 'Добавление роль'"
      :item="editUser"
      @close="close()"
      @confirm="addRole($event)"
    />
  </div>
</template>

<style scoped></style>
