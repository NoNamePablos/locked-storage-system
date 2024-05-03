<script setup lang="ts">
  import { ECardsView } from '~/services/enums'
  import { Plus } from 'lucide-vue-next'
  import AddButton from '~/components/ui/AddButton.vue'

  interface IProps<T> {
    items: T[]
    typeView: ECardsView
    buttonText: string
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
    (e: 'edit'): void
  }>()
</script>

<template>
  <div :class="['mb-4', computedClasses]">
    <div v-for="item in itemsList" :key="item.id" @click="emits('edit')">
      <slot name="card" :item="item" />
    </div>
  </div>
  <add-button :title="buttonText" @click="emits('add')" />
</template>

<style scoped></style>
