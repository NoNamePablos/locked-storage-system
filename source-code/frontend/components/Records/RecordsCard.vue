<script setup lang="ts">
  import type { IRecordItem } from '~/services/models'
  import { toRefs } from 'vue'

  interface IProps {
    item: IRecordItem
  }

  const props = defineProps<IProps>()
  const { item } = toRefs(props)

  const getFavicon = url => {
    return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${url}&size=64`
  }
</script>

<template>
  <div
    class="p-4 rounded border border-solid border-gray-400 flex items-center gap-4 hover:shadow transition-all cursor-pointer"
  >
    <div>
      <img :src="getFavicon(item.site)" class="w-[64px] h-[64px] object-contain" />
    </div>
    <div class="flex flex-col gap-2">
      <div class="font-bold text-md">{{ item.site }}</div>
      <div class="text-gray-400 font-medium">{{ item.email }}</div>
    </div>
  </div>
</template>

<style scoped></style>
