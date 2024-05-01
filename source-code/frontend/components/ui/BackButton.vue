<script setup lang="ts">
  import { ChevronLeft } from 'lucide-vue-next'
  import { navigateTo, toRefs } from '#imports'

  interface IProps {
    name?: string
    route?: string
  }

  const props = withDefaults(defineProps<IProps>(), {
    name: '',
    route: ''
  })

  const { name, route } = toRefs(props)

  const back = () => {
    if (route.value) {
      navigateTo(route.value)
    }
  }
</script>

<template>
  <div class="text-gray-400 inline-flex items-center cursor-pointer" @click="back()">
    <chevron-left :size="24" color="currentColor" />
    <span class="text-lg leading-4 font-medium">{{ name }}</span>
  </div>
</template>

<style scoped></style>
