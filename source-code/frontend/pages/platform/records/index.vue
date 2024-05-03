<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import Empty from '~/components/Empty/Empty.vue'
  import CreateCluster from '~/components/Cluster/CreateCluster.vue'
  import { mockCluster, mockClusterById } from '~/mock/clusters'
  import AuthCluster from '~/components/Cluster/AuthCluster.vue'
  import UsersModalCluster from '~/components/Cluster/UsersModalCluster.vue'
  import { RecordsHeader } from '#components'
  import { useTypeOfView } from '~/services/composables'
  import { StorageKeys } from '~/services/constants/StorageKeys'
  import ClusterCard from '~/components/Cluster/ClusterCard.vue'
  import ClusterModal from '~/components/Cluster/ClusterModal.vue'
  import TypeView from '~/components/TypeView/TypeView.vue'
  import { mockRecordById } from '~/mock/records'

  definePageMeta({
    layout: 'platform-layout',
    middleware: ['auth']
  })

  const { typeOfView, changeTypeOfView } = useTypeOfView(StorageKeys.CLUSTER_TYPE)

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
    isEditingRecord.value = false
    recordEditItem.value = null
  }

  const authModal = ref<boolean>(false)
  const clusterName = ref<string>('Авторизация')
  const usersModal = ref<boolean>(false)
  const userModalLoading = ref<boolean>(false)

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

  const isLoadingCluster = ref(false)
  const recordEditItem = ref(null)
  const isEditingRecord = ref(false)
  const fetchRecordsById = () => {
    isLoadingCluster.value = true
    try {
      setTimeout(() => {
        recordEditItem.value = mockClusterById
        console.log(recordEditItem.value)
        isLoadingCluster.value = false
      }, 400)
    } catch (e) {
      console.log(e)
    }
  }

  const openWithEditing = () => {
    createClusterModal.value = true
    isEditingRecord.value = true
    fetchRecordsById()
  }

  const onDeleteCluster = id => {
    console.log('deleting cluster: ', id)
  }
</script>

<template>
  <div class="h-full">
    <platform-header class="mt-4" title="Хранилища">
      <template #right>
        <a-button
          type="primary"
          size="middle"
          :icon="h(PlusOutlined)"
          @click="handleOpenClusterModal()"
          >Добавить хранилище</a-button
        >
      </template>
    </platform-header>
    <a-layout class="bg-white h-full">
      <records-header :type-view="typeOfView" @change-view="changeTypeOfView($event)" />
      <a-layout-content class="mt-6 px-4">
        <empty
          v-if="!mockCluster.length"
          title="Сейчас кластеры пусты ( "
          button-title="Добавить кластер"
          @trigger="handleOpenClusterModal()"
        />
        <type-view
          :items="mockCluster"
          :type-view="typeOfView"
          button-text="Добавить хранилище"
          @add="handleOpenClusterModal()"
          @edit="openWithEditing()"
        >
          <template #card="{ item }">
            <cluster-card :item="item" />
          </template>
        </type-view>
        <users-modal-cluster
          modal-title="Пользователи кластера"
          class="max-w-[600px]"
          :loading="userModalLoading"
          :open="false"
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
        <cluster-modal
          :open="createClusterModal"
          :is-editing="isEditingRecord"
          :is-loading="isLoadingCluster"
          :title="isEditingRecord ? 'Радактирование хранилища' : 'Добавление хранилища'"
          :item="recordEditItem"
          @close="handleCloseClusterModal()"
          @submit="handleOk()"
        />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped></style>
