<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import { mockRecordById, mockRecords } from '~/mock/records'
  import Empty from '~/components/Empty/Empty.vue'
  import RecordsHeader from '~/components/Records/RecordsHeader.vue'
  import BackButton from '~/components/ui/BackButton.vue'
  import { useTypeOfView } from '~/services/composables'
  import { StorageKeys } from '~/services/constants/StorageKeys'
  import type { IRecordItem } from '~/services/models'
  import TypeView from '~/components/TypeView/TypeView.vue'
  import clusterRepository from '~/services/repository/clusterRepository'
  import personalRecordsRepository from '~/services/repository/personalRecordsRepository'
  import ClusterCard from '~/components/Cluster/ClusterCard.vue'

  definePageMeta({
    layout: 'platform-layout'
  })

  const { typeOfView, changeTypeOfView } = useTypeOfView(StorageKeys.RECORDS_TYPE)

  const recordsList = ref<IRecordItem[]>()
  const isLoading = ref(false)
  const isLoadingRecord = ref(false)
  const isEditingRecord = ref(false)
  const recordEditItem = ref<IRecordItem | null>()

  const route = useRoute()

  console.log(route)

  const fetchRecords = async () => {
    isLoading.value = true
    try {
      const request = {
        cluster_id: route.params.id
      }
      const response = await personalRecordsRepository.list(request)
      recordsList.value = response.data
      console.log(recordsList.value)
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  const fetchRecordsById = async (id: number) => {
    isLoading.value = true
    try {
      const response = await personalRecordsRepository.findById({
        record_id: id
      })
      console.log(response)
      recordEditItem.value = response
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(async () => {
    await fetchRecords()
  })

  const openModal = ref<boolean>(false)

  const close = () => {
    openModal.value = false
    isEditingRecord.value = false
    isLoadingRecord.value = false
    recordEditItem.value = null
  }
  const open = () => {
    openModal.value = true
  }

  const appendCluster = async (data = null) => {
    isLoading.value = true
    try {
      await fetchRecords()
      close()
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  const openRecordsModal = async (id = 0, type = 'create') => {
    if (type === 'create') {
      openModal.value = true
    }
    if (type === 'edit') {
      isLoadingRecord.value = true
      isEditingRecord.value = true
      try {
        await fetchRecordsById(id)
        openModal.value = true
      } catch (e) {
        console.log(e)
      } finally {
        isLoadingRecord.value = false
      }
    }
    if (type === 'open') {
      isLoadingRecord.value = true
      isEditingRecord.value = true
      try {
        await fetchRecordsById(id)
        openModal.value = true
      } catch (e) {
        console.log(e)
      } finally {
        isLoadingRecord.value = false
      }
    }
  }

  const serch = ref('')

  const serchRecords = async data => {
    isLoading.value = true
    try {
      if (!data.length) {
        await fetchRecords()
      } else {
        const response = await personalRecordsRepository.search({
          find: data,
          cluster_id: +route.params.id
        })
        recordsList.value = response
      }
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }
</script>

<template>
  <div class="h-full">
    <back-button class="mt-4" name="Все хранилища" route="/platform/records" />
    <platform-header title="Записи хранилища">
      <template #right>
        <a-button type="primary" size="middle" :icon="h(PlusOutlined)" @click="open()"
          >Добавить пароль</a-button
        >
      </template>
    </platform-header>
    <a-layout class="bg-white h-full">
      <records-header
        :search="serch"
        :type-view="typeOfView"
        @change-view="changeTypeOfView($event)"
        @search="serchRecords($event)"
      />
      <a-layout-content class="mt-6 px-4">
        <empty v-if="recordsList && recordsList.length === 0" title="Сейчас нет записей" />
        <a-skeleton v-if="isLoading" />
        <type-view
          v-else
          :items="recordsList"
          :type-view="typeOfView"
          button-text="Добавить пароль"
          :empty="recordsList && recordsList.length === 0"
          @add="open()"
        >
          <template #card="{ item }">
            <records-card
              :item="item"
              @open="openRecordsModal($event, 'open')"
              @edit="openRecordsModal($event, 'edit')"
            />
          </template>
        </type-view>
      </a-layout-content>
    </a-layout>
  </div>
  <records-modal
    :is-editing="isEditingRecord"
    :is-loading="isLoadingRecord"
    :item="recordEditItem"
    :open="openModal"
    :clusterd-id="route.params.id"
    @close="close()"
    @confirm="appendCluster($event)"
  />
</template>

<style scoped></style>
