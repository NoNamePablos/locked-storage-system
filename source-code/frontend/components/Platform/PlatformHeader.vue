<script setup lang="ts">
  import { useSlots } from 'vue'

  interface IProps {
    title: string
  }
  const slots = useSlots()
  const props = defineProps<IProps>()
</script>

<template>
  <a-flex wrap="wrap" :gap="10" justify="space-between" class="px-4 py-2">
    <div class="text-black">
      <span class="text-2xl sm:text-3xl font-bold"> {{ title }}</span>
    </div>
    <div v-if="slots.right" class="">
      <slot name="right" />
    </div>
  </a-flex>
</template>

<style scoped></style>
