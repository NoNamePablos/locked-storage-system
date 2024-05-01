<script setup lang="ts">
  import { Plus } from 'lucide-vue-next'
  interface IProps {
    title: string
  }

  const props = defineProps<IProps>()
</script>

<template>
  <div
    class="p-3 sm:p-6 border-2 border-dashed border-gray-400 flex items-center justify-center max-w-[250px] rounded text-gray-400 gap-2 cursor-pointer hover:text-gray-500 hover:border-gray-500 transition-all"
  >
    <plus :size="24" color="currentColor" />
    <span class="text-md font-medium leading-6">{{ title }}</span>
  </div>
</template>

<style scoped></style>
