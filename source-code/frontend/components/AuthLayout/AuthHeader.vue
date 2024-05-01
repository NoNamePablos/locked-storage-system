<script setup lang="ts">
  import { Logo } from '~/components/image-components'
  import { useMobile } from '~/services/composables'

  const { isMobile } = useMobile()

  interface IProps {
    tooltipColor?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    tooltipColor: ''
  })
</script>

<template>
  <div class="h-[48px] px-6 py-2 fixed top-0 left-0 right-0 z-50 shadow-sm">
    <a-flex class="h-full max-w-[1366px] mx-auto gap-4" justify="space-between">
      <nuxt-link to="/" class="inline-flex items-center gap-2">
        <Logo />
        <span class="text-[24px] font-bold uppercase">PassVolt</span>
      </nuxt-link>
      <a-flex v-if="!isMobile" align="center" class="gap-4">
        <nuxt-link class="text-blue-900" :to="{ path: '/', hash: '#features' }">Features</nuxt-link>
        <nuxt-link class="text-blue-900" :to="{ path: '/', hash: '#choose' }"
          >Why Choose us?</nuxt-link
        >
      </a-flex>
      <a-flex gap="small">
        <a-tooltip v-if="!isMobile" title="войти в аккаунт" :color="tooltipColor">
          <nuxt-link to="/login">
            <a-button> Sign In </a-button>
          </nuxt-link>
        </a-tooltip>
        <div v-else>X</div>
      </a-flex>
    </a-flex>
  </div>
</template>

<style scoped></style>
