<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import Empty from '~/components/Empty/Empty.vue'
  import CreateCluster from '~/components/Cluster/CreateCluster.vue'
  import { mockCluster } from '~/mock/clusters'
  import AuthCluster from '~/components/Cluster/AuthCluster.vue'
  import UsersModalCluster from '~/components/Cluster/UsersModalCluster.vue'

  definePageMeta({
    layout: 'platform-layout',
    middleware: ['auth']
  })

  const clasterSearch = ref<string>('')
  const onSearch = (searchValue: string) => {
    console.log('use value', searchValue)
    console.log('or use this.value', clasterSearch.value)
  }

  const createClusterModal = ref<boolean>(false)
  const handleOpenClusterModal = () => {
    createClusterModal.value = true
  }
  const handleCloseClusterModal = () => {
    console.log('fdsfsd')
    createClusterModal.value = false
  }

  const authModal = ref<boolean>(false)
  const clusterName = ref<string>('Авторизация')
  const usersModal = ref<boolean>(false)
  const userModalLoading = ref<boolean>(false)

  const openUsersModal = () => {
    usersModal.value = true
  }
  const closeUsersModal = () => {
    usersModal.value = false
  }
  const authModalId = ref<string | number>('')
  const openAuthModal = (name: string, id: string | number) => {
    authModal.value = true
    clusterName.value = `Авторизация в кластере  "${name}"`
    authModalId.value = id
  }
  const closeAuthModal = () => {
    authModal.value = false
    authModalId.value = ''
  }
  const router = useRouter()
  const handleOk2 = id => {
    loadingCluster.value = false
    router.push({ path: `/platform/records/${id}` })
    closeAuthModal()
  }
  const handleOk3 = () => {
    userModalLoading.value = true
    setTimeout(() => {
      userModalLoading.value = false
      closeUsersModal()
    }, 2000)
  }

  const loadingCluster = ref(false)
  const handleOk = () => {
    loadingCluster.value = true
    setTimeout(() => {
      loadingCluster.value = false
      handleCloseClusterModal()
    }, 2000)
  }

  const onDeleteCluster = id => {
    console.log('deleting cluster: ', id)
  }
</script>

<template>
  <div class="h-full">
    <platform-header title="Пространство" />
    <a-layout class="bg-white h-full">
      <div
        class="mt-4 pb-6 px-4 flex w-full items-center flex-wrap justify-between border-solid border-transparent border-b-gray-200 border-0 border-b-[1px]"
      >
        <div class="max-w-[400px] mt-4 w-full">
          <a-input-search
            v-model:value="clasterSearch"
            placeholder="Введите название кластера"
            size="large"
            @search="onSearch($event)"
          />
        </div>
        <div>
          <a-button
            type="dashed"
            size="large"
            :icon="h(PlusOutlined)"
            @click="handleOpenClusterModal()"
            >Добавить кластер</a-button
          >
        </div>
      </div>
      <a-layout-content class="mt-6 px-4">
        <empty
          v-if="!mockCluster.length"
          title="Сейчас кластеры пусты ( "
          button-title="Добавить кластер"
          @trigger="handleOpenClusterModal()"
        />
        <div>
          <a-flex wrap="wrap" gap="middle">
            <div v-for="cluster in mockCluster" :key="cluster.id">
              <a-card hoverable style="width: 200px">
                <a-card-meta
                  :title="cluster.name"
                  @click="openAuthModal(cluster.name, cluster.id)"
                />
                <template #actions>
                  <plus-outlined @click="openUsersModal()" />
                  <EditOutlined />
                  <base-delete-modal :id="cluster.id" @confirm-delete="onDeleteCluster($event)">
                    <div class="text-red-600">
                      <delete-outlined />
                    </div>
                  </base-delete-modal>
                </template>
              </a-card>
            </div>
          </a-flex>
        </div>

        <users-modal-cluster
          modal-title="Пользователи кластера"
          class="max-w-[600px]"
          :loading="userModalLoading"
          :open="usersModal"
          @close="closeUsersModal()"
          @submit="handleOk3()"
        />
        <auth-cluster
          :id="authModalId"
          :modal-title="clusterName"
          class="max-w-[600px]"
          :loading="loadingCluster"
          :open="authModal"
          @close="closeAuthModal()"
          @submit="handleOk2($event)"
        />
        <create-cluster
          modal-title="Cоздание кластера"
          class="max-w-[600px]"
          :loading="loadingCluster"
          :open="createClusterModal"
          @close="handleCloseClusterModal()"
          @submit="handleOk()"
        />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped></style>
