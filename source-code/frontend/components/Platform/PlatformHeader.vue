<script setup lang="ts">
  interface IProps {
    title: string
  }
  const props = defineProps<IProps>()
</script>

<template>
  <div
    class="p-4 text-black border-solid border-transparent border-b-gray-200 border-0 border-b-[1px]"
  >
    <a-typography-title :level="4" style="margin-bottom: 0">{{ title }}</a-typography-title>
  </div>
</template>

<style scoped></style>
