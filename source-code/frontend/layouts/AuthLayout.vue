<script setup lang="ts">
  import AuthHeader from '~/components/AuthLayout/AuthHeader.vue'
</script>

<template>
  <div class="h-full mx-auto bg-zinc-50">
    <a-layout class="h-screen flex flex-col">
      <auth-header />
      <div class="flex-grow-[1] h-full">
        <div class="max-w-[1366px] mx-auto px-10 h-full">
          <div class="h-full flex items-center justify-center w-full">
            <slot />
          </div>
        </div>
      </div>
      <div class="h-[64px] bg-gray-400"></div>
    </a-layout>
  </div>
</template>

<style scoped></style>
