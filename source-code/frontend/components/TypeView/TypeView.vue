<script setup lang="ts">
  import { ECardsView } from '~/services/enums'
  import AddButton from '~/components/ui/AddButton.vue'
  import { watch } from 'vue'

  interface IProps {
    items: unknown[]
    typeView: ECardsView
    buttonText: string
    empty?: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    empty: false
  })
  const { typeView, items } = toRefs(props)
  const itemsList = ref([])

  watch(
    () => items.value,
    newValue => {
      itemsList.value = newValue
    },
    {
      immediate: true
    }
  )

  const computedClasses = computed(() => {
    const base = 'gap-4'
    if (typeView.value === ECardsView.CARDS) {
      return base + ' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
    }
    if (typeView.value === ECardsView.ROWS) {
      return base + ' grid grid-cols-1'
    }
    return base
  })

  const emits = defineEmits<{
    (e: 'add'): void
  }>()
</script>

<template>
  <div :class="['mb-4', computedClasses]">
    <div v-for="(item, index) in itemsList" :key="index">
      <slot name="card" :item="item" />
    </div>
  </div>
  <add-button v-if="!empty" :title="buttonText" @click="emits('add')" />
</template>

<style scoped></style>
