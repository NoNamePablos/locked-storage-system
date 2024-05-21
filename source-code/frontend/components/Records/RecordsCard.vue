<script setup lang="ts">
  import type { IRecordItem } from '~/services/models'
  import { toRefs } from 'vue'
  import { Settings } from 'lucide-vue-next'

  interface IProps {
    item: IRecordItem
  }

  const props = defineProps<IProps>()
  const { item } = toRefs(props)

  const getFavicon = (url: string) => {
    return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${url.trim()}&size=64`
  }

  const emits = defineEmits<{
    (event: 'edit', id: IRecordItem['id']): void
    (event: 'open', id: IRecordItem['id']): void
  }>()
</script>

<template>
  <div
    class="relative p-4 rounded border border-solid border-gray-400 flex items-center gap-4 hover:shadow transition-all cursor-pointer"
    @click="emits('open', item.id)"
  >
    <div>
      <img :src="getFavicon(item.site)" class="w-[64px] h-[64px] object-contain" />
    </div>
    <div class="flex flex-col gap-2">
      <div class="font-bold text-md">{{ item?.title ?? item.site }}</div>
      <div class="text-gray-400 font-medium">{{ item?.email ?? item?.login ?? '' }}</div>
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
