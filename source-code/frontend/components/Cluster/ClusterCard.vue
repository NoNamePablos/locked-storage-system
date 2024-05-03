<script setup lang="ts">
  import type { ICluster } from '~/services/models'
  import { toRefs } from 'vue'

  interface IProps {
    item: ICluster
  }

  const props = defineProps<IProps>()
  const { item } = toRefs(props)
</script>

<template>
  <div
    class="p-4 rounded border border-solid border-gray-400 flex items-center gap-4 hover:shadow transition-all cursor-pointer relative"
  >
    <div class="flex flex-col gap-2">
      <div class="font-bold text-md">{{ item.name }}</div>
      <div class="text-gray-400 font-medium">{{ item.created }}</div>
    </div>
    <div class="absolute top-4 right-2 text-blue-400">{{ item.users.length }} пользователей</div>
  </div>
</template>

<style scoped></style>
