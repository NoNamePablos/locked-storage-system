<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import Empty from '~/components/Empty/Empty.vue'
  import CreateCluster from '~/components/Cluster/CreateCluster.vue'

  definePageMeta({
    layout: 'platform-layout'
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
  const loadingCluster = ref(false)
  const handleOk = () => {
    loadingCluster.value = true
    setTimeout(() => {
      loadingCluster.value = false
      handleCloseClusterModal()
    }, 2000)
  }
</script>

<template>
  <div class="h-full">
    <platform-header title="Пространство" />
    <a-layout class="px-4 bg-white h-full">
      <div class="mt-4 flex w-full items-center justify-between">
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
      <a-layout-content class="mt-6">
        <empty
          title="Сейчас кластеры пусты ( "
          button-title="Добавить кластер"
          @trigger="handleOpenClusterModal()"
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
