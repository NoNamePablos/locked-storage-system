<script setup lang="ts">
  import { ECardsView } from '~/services/enums'
  import { Plus } from 'lucide-vue-next'
  import AddButton from '~/components/ui/AddButton.vue'

  interface IProps<T> {
    items: T[]
    typeView: ECardsView
  }
  type TElementType<T> = T extends (infer U)[] ? U : never

  const props = defineProps<IProps<unknown>>()
  const { typeView } = toRefs(props)
  type ItemType = TElementType<typeof props.items>
  const itemsList = props.items as ItemType[]

  const computedClasses = computed(() => {
    const base = 'gap-4'
    if (typeView.value === ECardsView.CARDS) {
      return base + ' grid grid-cols-4'
    }
    if (typeView.value === ECardsView.ROWS) {
      return base + ' grid grid-cols-1'
    }
    return base
  })

  const emits = defineEmits<{
    (e: 'add'): void
  }>()

  const getFavicon = url => {
    return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${url}&size=64`
  }
</script>

<template>
  <div :class="['mb-4', computedClasses]">
    <div v-for="cluster in itemsList" :key="cluster.id">
      <div
        class="p-4 rounded border border-solid border-gray-400 flex items-center gap-4 hover:shadow transition-all cursor-pointer"
      >
        <div>
          <img :src="getFavicon(cluster.site)" class="w-[64px] h-[64px] object-contain" />
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-bold text-md">{{ cluster.site }}</div>
          <div class="text-gray-400 font-medium">{{ cluster.email }}</div>
        </div>
      </div>
    </div>
  </div>
  <add-button title="Добавить пароль" @click="emits('add')" />
</template>

<style scoped></style>
