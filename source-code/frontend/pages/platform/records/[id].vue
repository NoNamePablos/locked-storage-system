<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import { mockRecords } from '~/mock/records'
  import Empty from '~/components/Empty/Empty.vue'
  import RecordsHeader from '~/components/Records/RecordsHeader.vue'
  import BackButton from '~/components/ui/BackButton.vue'
  import { useTypeOfView } from '~/services/composables'
  import { StorageKeys } from '~/services/constants/StorageKeys'
  import type { IRecordItem } from '~/services/models'
  import TypeView from '~/components/TypeView/TypeView.vue'

  definePageMeta({
    layout: 'platform-layout'
  })

  const { typeOfView, changeTypeOfView } = useTypeOfView(StorageKeys.RECORDS_TYPE)

  const recordsList = ref<IRecordItem[]>()
  const isLoading = ref(false)

  const fetchRecords = () => {
    isLoading.value = true
    try {
      setTimeout(() => {
        recordsList.value = mockRecords
        isLoading.value = false
      }, 400)
    } catch (e) {
      console.log(e)
    }
  }
  onMounted(() => {
    fetchRecords()
  })

  const openModal = ref<boolean>(false)

  const close = () => {
    openModal.value = false
  }
  const open = () => {
    openModal.value = true
  }
</script>

<template>
  <div class="h-full">
    <back-button class="mt-4" name="Кластеры" route="/platform/records" />
    <platform-header title="Записи кластера">
      <template #right>
        <a-button type="primary" size="middle" :icon="h(PlusOutlined)" @click="open()"
          >Добавить пароль</a-button
        >
      </template>
    </platform-header>
    <a-layout class="bg-white h-full">
      <records-header :type-view="typeOfView" @change-view="changeTypeOfView($event)" />
      <a-layout-content class="mt-6 px-4">
        <empty
          v-if="recordsList && recordsList.length === 0"
          title="Сейчас кластеры пусты"
          button-title="Добавить кластер"
        />
        <a-skeleton v-if="isLoading" />
        <type-view v-else :items="recordsList" :type-view="typeOfView" @add="open()" />
      </a-layout-content>
    </a-layout>
  </div>
  <records-modal :open="openModal" @close="close()" />
</template>

<style scoped></style>
