<script setup lang="ts">
  import { Logo } from '~/components/image-components'

  interface IProps {
    readonly login?: boolean
    readonly register?: boolean
  }
  const props = withDefaults(defineProps<IProps>(), {
    login: false,
    register: false
  })
</script>

<template>
  <div class="h-[48px] px-6 py-2 sticky top-0 shadow-sm">
    <a-flex class="h-full max-w-[1366px] mx-auto" justify="space-between">
      <nuxt-link to="/">
        <a-tooltip title="Вернуть на главную">
          <Logo />
        </a-tooltip>
      </nuxt-link>
      <a-flex gap="small">
        <a-tooltip v-if="login" title="Войти в аккаунт">
          <a-button href="/login"> Войти </a-button>
        </a-tooltip>
        <a-tooltip v-if="register" title="Зарегистрироваться">
          <a-button href="/register" type="primary" danger> Регистрация </a-button>
        </a-tooltip>
      </a-flex>
    </a-flex>
  </div>
</template>

<style scoped></style>
