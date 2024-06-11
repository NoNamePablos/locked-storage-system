<script setup lang="ts">
  import { ref } from 'vue'
  import { AlignJustify, Grip, Search } from 'lucide-vue-next'
  import { ECardsView } from '~/services/enums'

  const clasterSearch = ref<string>('')

  interface IProps {
    typeView: ECardsView
  }

  defineProps<IProps>()

  const search = ref('')

  const emit = defineEmits<{
    (e: 'change-view', data: ECardsView): void
    (e: 'search', data: string): void
  }>()

  const changeView = (data: ECardsView) => {
    emit('change-view', data)
  }

  const onSearch = (searchValue: string) => {
    emit('search', searchValue)
  }
</script>

<template>
  <div
    class="mt-4 pb-6 px-2 sm:px-4 flex w-full items-center justify-between border-solid border-transparent border-b-gray-200 border-0 border-b-[1px]"
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
    <a-flex :gap="4">
      <div
        :class="[
          typeView === ECardsView.ROWS ? 'text-black' : 'text-gray-400',
          'cursor-pointer hover:text-black transition-all'
        ]"
        @click="changeView(ECardsView.ROWS)"
      >
        <align-justify :size="24" color="currentColor" />
      </div>
      <div
        :class="[
          typeView === ECardsView.CARDS ? 'text-black' : 'text-gray-400',
          'cursor-pointer hover:text-black transition-all'
        ]"
        @click="changeView(ECardsView.CARDS)"
      >
        <grip :size="24" color="currentColor" />
      </div>
    </a-flex>
  </div>
</template>

<style scoped></style>
