<script setup lang="ts">
  interface IProps {
    title: string
    buttonTitle: string
  }

  const props = defineProps<IProps>()

  const emits = defineEmits<{
    (e: 'trigger'): void
  }>()

  const trigger = () => {
    emits('trigger')
  }
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <a-empty
      :image-style="{
        height: '60px'
      }"
    >
      <template #image>
        <img src="~/assets/images/platform/empty-image.webp" alt="" />
      </template>
      <template #description>
        <span>{{ title }}</span>
      </template>
      <a-button type="primary" @click="trigger()">{{ buttonTitle }}</a-button>
    </a-empty>
  </div>
</template>

<style scoped></style>
