<script setup lang="ts">
  import type { ICluster } from '~/services/models'
  import { toRefs } from 'vue'
  import { Settings } from 'lucide-vue-next'

  interface IProps {
    item: ICluster
  }

  const props = defineProps<IProps>()
  const { item } = toRefs(props)

  const emits = defineEmits<{
    (event: 'edit', id: ICluster['id']): void
    (event: 'open', id: ICluster['id']): void
  }>()
</script>

<template>
  <div
    class="relative p-4 rounded border border-solid border-gray-400 flex items-center gap-4 hover:shadow transition-all cursor-pointer relative"
    @click="emits('open', item.id)"
  >
    <div class="flex flex-col gap-2">
      <div class="font-bold text-md">{{ item.name }}</div>
      <div class="text-gray-400 font-medium">{{ item.created }}</div>
    </div>
    <div
      class="absolute top-4 right-2 text-gray-400 transition-all hover:text-blue-400"
      @click.stop="emits('edit', item.id)"
    >
      <settings color="currentColor" />
    </div>
  </div>
</template>

<style scoped></style>
