<script setup lang="ts">
  import { Logo } from '~/components/image-components'

  interface IProps {
    tooltipColor?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    tooltipColor: ''
  })
</script>

<template>
  <div class="h-[48px] px-6 py-2 sticky top-0 shadow-sm">
    <a-flex class="h-full max-w-[1366px] mx-auto" justify="space-between">
      <nuxt-link to="/">
        <a-tooltip title="Вернуть на главную" :color="tooltipColor">
          <Logo />
        </a-tooltip>
      </nuxt-link>
      <a-flex gap="small">
        <a-tooltip title="Войти в аккаунт" :color="tooltipColor">
          <nuxt-link to="/login">
            <a-button> Войти </a-button>
          </nuxt-link>
        </a-tooltip>
        <a-tooltip title="Зарегистрироваться" :color="tooltipColor">
          <nuxt-link to="/register">
            <a-button type="primary" danger> Регистрация </a-button>
          </nuxt-link>
        </a-tooltip>
      </a-flex>
    </a-flex>
  </div>
</template>

<style scoped></style>
