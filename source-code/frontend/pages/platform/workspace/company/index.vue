<script setup lang="ts">
  import { definePageMeta, Modal } from '#imports'
  import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
  import companyRepository from '~/services/repository/companyRepository'
  import { Search } from 'lucide-vue-next'
  import { h } from 'vue'
  import roleRepository from '~/services/repository/roleRepository'

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
    await fetchRoles()
    await fetchUsers()
  })

  const computedHeaders = computed(() => {
    return [
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
        key: 'company_role',
        dataIndex: 'company_role'
      },
      {
        title: 'Действия',
        key: 'action'
      }
    ]
  })

  const isOpenModal = ref(false)
  const isEditUser = ref(false)
  const isLoadingUser = ref(false)
  const editUserObject = ref(null)
  const roles = ref([])

  const addUser = async data => {
    try {
      console.log(data)
      close()
      await fetchUsers()
    } catch (e) {
      console.log(e)
    }
  }

  const fetchRoles = async () => {
    try {
      const response = await roleRepository.list(userStore.getUser.owner.id)
      roles.value = response
    } catch (e) {
      console.log(e)
    }
  }

  const close = () => {
    isOpenModal.value = false
    isEditUser.value = false
    editUserObject.value = null
  }

  const fetchUserById = async (id: number) => {
    isLoadingUser.value = true
    try {
      return await companyRepository.fetchUserById({
        params: {
          company_id: userStore.getUser.owner.id,
          user_id: id
        }
      })
    } catch (e) {
      console.log(e)
    }
    isLoadingUser.value = false
  }

  const editUser = async (id: number) => {
    try {
      const response = await fetchUserById(id)
      console.log(response)
      /*if (response) {
        isOpenModal.value = false
        isEditUser.value = false
        editUser.value = null
      }*/
    } catch (e) {
      console.log(e)
    }
  }

  const open = () => {
    isOpenModal.value = true
  }

  const onDelete = async user => {
    Modal.confirm({
      title: `Вы точно хотите удалить пользователя ${user.name}?`,
      icon: h(ExclamationCircleOutlined),
      async onOk() {
        try {
          await deleteUser(user.id)
          await fetchUsers()
        } catch (e) {
          console.log(e)
        }
      },
      onCancel() {}
    })
  }

  const deleteUser = async (id: number) => {
    try {
      const addUserRequest = {
        company_id: userStore.getUser.owner.id,
        user_id: id
      }
      const response = await companyRepository.deleteUser(addUserRequest)
      await fetchUsers()
    } catch (e) {
      console.log(e)
    }
  }

  const search = ref('')

  const onSearch = async (data: string) => {
    isLoading.value = true
    try {
      console.log(data)
    } catch (e) {
      console.log(e)
    }
    isLoading.value = false
  }

  const selectedValue = ref(0)

  const handleChange = async (value: number) => {
    isLoading.value = true
    try {
      selectedValue.value = value
      if (value !== 0) {
        users.value = await roleRepository.search(userStore.getUser.owner.id, value)
      } else {
        await fetchUsers()
      }
    } catch (e) {
      console.log(e)
    }
    isLoading.value = false
  }

  const computedRoles = computed(() => {
    const arr = roles.value.map(item => ({
      label: item.role,
      value: item.id
    }))

    return [
      {
        label: 'Все',
        value: 0
      },
      ...arr
    ]
  })
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
                <Search :size="16" color="currentColor" />
              </template>
            </a-input>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <span>Сортировка</span>
          <a-select
            v-model:value="selectedValue"
            style="width: 100px"
            :options="computedRoles"
            @change="handleChange($event)"
          />
        </div>
      </div>
      <a-table :columns="computedHeaders" :data-source="users">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Имя </span>
          </template>
          <template v-if="column.key === 'id'">
            <span> ID </span>
          </template>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'company_role'">
            {{ record.company_role ?? 'Роль не задана' }}
          </template>
          <template v-if="column.key === 'action'">
            <a-button type="link" danger @click="onDelete(record)">Удалить</a-button>
            <a-button type="link" @click="editUser(record.id)">Редактировать</a-button>
          </template>
        </template>
      </a-table>
    </div>
    <company-modal
      :open="isOpenModal"
      :is-editing="isEditUser"
      :is-loading="isLoadingUser"
      :roles="roles"
      :title="isEditUser ? 'Радактировать пользователя' : 'Добавление пользователя'"
      :item="editUserObject"
      @close="close()"
      @confirm="addUser($event)"
    />
  </div>
</template>

<style scoped></style>
