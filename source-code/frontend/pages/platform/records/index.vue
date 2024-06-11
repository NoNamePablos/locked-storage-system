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
  import clusterRepository from '~/services/repository/clusterRepository'
  import personalRecordsRepository from '~/services/repository/personalRecordsRepository'

  definePageMeta({
    layout: 'platform-layout',
    middleware: ['auth']
  })

  const { typeOfView, changeTypeOfView } = useTypeOfView(StorageKeys.CLUSTER_TYPE)

  const userStore = useAuthStore()
  const clasterSearch = ref<string>('')

  const authCluster = ref({
    typeOfAuth: 'create',
    clusterId: 0
  })
  const onSearch = (searchValue: string) => {
    console.log('use value', searchValue)
    console.log('or use this.value', clasterSearch.value)
  }

  const createClusterModal = ref<boolean>(false)
  const handleOpenClusterModal = (id = 0, type = 'create') => {
    console.log(type)
    if (type === 'create') {
      createClusterModal.value = true
    }
    if (type === 'edit') {
      openAuthModal(id, type)
    }
    if (type === 'open') {
      openAuthModal(id, type)
    }
  }
  const handleCloseClusterModal = () => {
    createClusterModal.value = false
    isEditingRecord.value = false
    recordEditItem.value = null
  }

  const authModal = ref<boolean>(false)
  const clusterName = ref<string>('Авторизация')
  const usersModal = ref<boolean>(false)
  const userModalLoading = ref<boolean>(false)
  const clustersList = ref([])

  const fetchClusters = async () => {
    isLoadingCluster.value = true
    try {
      const request = {
        user_id: userStore.getUser.id
      }
      const response = await clusterRepository.list(request)
      clustersList.value = response

      console.log(clustersList.value)
    } catch (e) {
      console.log(e)
    } finally {
      isLoadingCluster.value = false
    }
  }

  const closeUsersModal = () => {
    usersModal.value = false
  }
  const authModalId = ref<string | number>('')
  const openAuthModal = (id: number, type: string) => {
    authModal.value = true
    clusterName.value = `Авторизация в хранилище`
    authCluster.value.typeOfAuth = type
    authCluster.value.clusterId = id
  }
  const closeAuthModal = () => {
    authModal.value = false
    authModalId.value = ''
    authCluster.value.typeOfAuth = 'create'
    authCluster.value.id = 0
  }
  const router = useRouter()
  const handleOk2 = async ({ data, type }) => {
    try {
      closeAuthModal()
      if (type === 'edit') {
        createClusterModal.value = true
        isEditingRecord.value = true
        recordEditItem.value = data
      }
      if (type === 'open') {
        await router.push({ path: `/platform/records/${data.id}` })
      }
    } catch (e) {
      console.log(e)
    }
  }
  const handleOk3 = () => {
    userModalLoading.value = true
    setTimeout(() => {
      userModalLoading.value = false
      closeUsersModal()
    }, 2000)
  }

  const loadingCluster = ref(false)
  const appendCluster = async data => {
    loadingCluster.value = true
    try {
      await fetchClusters()

      handleCloseClusterModal()
    } catch (e) {
      console.log(e)
    } finally {
      isLoadingCluster.value = false
    }
    /*setTimeout(() => {
      loadingCluster.value = false
      handleCloseClusterModal()
    }, 2000)*/
  }

  const isLoadingCluster = ref(false)
  const recordEditItem = ref(null)
  const isEditingRecord = ref(false)

  const onDeleteCluster = id => {
    console.log('deleting cluster: ', id)
  }

  onMounted(async () => {
    await userStore.profile()
    await fetchClusters()
  })

  const serchClusters = async data => {
    isLoadingCluster.value = true
    try {
      if (!data.length) {
        await fetchClusters()
      } else {
        const response = await clusterRepository.search({
          find: data
        })
        console.log(response)
        clustersList.value = response
      }
    } catch (e) {
      console.log(e)
    } finally {
      isLoadingCluster.value = false
    }
  }
</script>

<template>
  <div class="h-full">
    <platform-header class="mt-4" title="Личное хранилище">
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
      <records-header
        :type-view="typeOfView"
        @search="serchClusters($event)"
        @change-view="changeTypeOfView($event)"
      />
      <a-layout-content class="mt-6 px-4">
        <empty
          v-if="!clustersList.length"
          title="Oooopsss... Добавьте хранилище"
          button-title="Добавить хранилище"
          @trigger="handleOpenClusterModal()"
        />
        <type-view
          v-else
          :items="clustersList"
          :type-view="typeOfView"
          button-text="Добавить хранилище"
          @add="handleOpenClusterModal()"
        >
          <template #card="{ item }">
            <cluster-card
              :item="item"
              :is-owner="true"
              @edit="handleOpenClusterModal($event, 'edit')"
              @open="handleOpenClusterModal($event, 'open')"
            />
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
          :cluster-id="authCluster.clusterId"
          :type="authCluster.typeOfAuth"
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
          @confirm="appendCluster($event)"
        />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped></style>
