<script setup lang="ts">
  import { useSettingsStore } from '~/stores/settings'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'
  import { useAuthStore } from '~/stores/auth'

  const authStore = useAuthStore()
  const settingsStore = useSettingsStore()
  const { isMobile } = storeToRefs(settingsStore)
  onMounted(async () => {
    if (authStore.getToken()) {
      await authStore.profile()
    }
    const mq = window.matchMedia('(max-width: 640px)')
    isMobile.value = mq.matches
    mq.addEventListener('change', () => {
      isMobile.value = mq.matches
    })
  })
</script>

<template>
  <div class="h-screen">
    <nuxt-layout>
      <a-config-provider>
        <nuxt-page />
      </a-config-provider>
    </nuxt-layout>
  </div>
</template>
