<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import { mockRecords } from '~/mock/records'
  import Empty from '~/components/Empty/Empty.vue'

  definePageMeta({
    layout: 'platform-layout'
  })

  const route = useRoute()
  console.log('fdfd', route.params) // { id: '123' }

  const clasterSearch = ref<string>('')
  const onSearch = (searchValue: string) => {
    console.log('use value', searchValue)
    console.log('or use this.value', clasterSearch.value)
  }

  const isEmpty = ref(false)
</script>

<template>
  <div class="h-full">
    <platform-header title="Записи кластера" />
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
          <a-button type="dashed" size="large" :icon="h(PlusOutlined)">Добавить запись</a-button>
        </div>
      </div>
      <a-layout-content class="mt-6 px-4">
        <empty v-if="isEmpty" title="Сейчас кластеры пусты ( " button-title="Добавить кластер" />
        <span>Cluster ID: {{ route.params.id }}</span>
        <a-flex wrap="wrap" gap="middle">
          <div v-for="cluster in mockRecords" :key="cluster.id">
            <a-card hoverable style="width: 200px">
              <a-card-meta :title="cluster.service_name" />
              <template #actions>
                <plus-outlined />
                <EditOutlined />
                <div class="text-red-600">
                  <delete-outlined />
                </div>
              </template>
            </a-card>
          </div>
        </a-flex>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped></style>
