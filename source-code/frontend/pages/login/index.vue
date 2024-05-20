<script setup lang="ts">
  import { definePageMeta, notification, useNuxtApp, useRouter } from '#imports'
  import { reactive } from 'vue'
  import { handleError } from '~/services/utils/handleError'
  import { RoutesNames } from '~/services/constants/routesNames'
  import { useAuthStore } from '~/stores/auth'

  definePageMeta({
    layout: 'auth-layout',
    middleware: ['auth']
  })

  const router = useRouter()
  const authStore = useAuthStore()

  interface FormState {
    email: string
    password: string
    remember: boolean
  }

  const formState = reactive<FormState>({
    email: '',
    password: '',
    remember: true
  })
  const onFinish = async (values: any) => {
    try {
      console.log('success', values)
      await authStore.login(values)

      if (authStore.isAuth) {
        await authStore.profile()
        await router.push(RoutesNames.RECORDS)

        notification.success({
          message: 'Удачная авторизация',
          description: 'Вы успещно вошли в систему.'
        })
      }
    } catch (error) {
      handleError(error)
      notification.error({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    }
  }
</script>

<template>
  <a-row class="w-full" :gutter="[32, 8]" align="center">
    <a-col :span="8">
      <div class="rounded-lg shadow-lg bg-white">
        <a-form :model="formState" autocomplete="off" class="px-12" @finish="onFinish($event)">
          <a-typography-title class="py-10" :level="2">Войти</a-typography-title>
          <a-form-item
            name="email"
            :rules="{ required: true, type: 'email', message: 'Please input your email!' }"
          >
            <a-input v-model:value="formState.email" placeholder="E-mail">
              <template #prefix>
                <user-outlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formState.password" placeholder="Password">
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input-password>
          </a-form-item>
          <a-flex justify="space-between" align="center">
            <a-form-item name="remember">
              <a-checkbox v-model:checked="formState.remember">Запомнить меня</a-checkbox>
            </a-form-item>
            <a-form-item>
              <a-button
                html-type="submit"
                type="ghost"
                size="large"
                shape="round"
                class="bg-blue-500 text-white hover:text-white bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-colors"
                >Войти</a-button
              >
            </a-form-item>
          </a-flex>
        </a-form>
        <div class="px-12 py-2 border-transparent border-solid border-t-2 border-t-blue-500">
          <a-typography-text type="secondary">Нет аккаунта?</a-typography-text>
          <a-typography-link href="/register"> Зарегистрироваться </a-typography-link>
        </div>
      </div>
    </a-col>
    <a-col :span="12">
      <a-carousel autoplay>
        <div class="max-w-[400px]">
          <a-flex vertical align="center" justify="center">
            <img
              src="~/assets/images/shield/shield-img.webp"
              alt=""
              width="351"
              height="139"
              class="object-contain w-full"
            />
            <a-typography-title :level="4">Сохраните ключ восстановления</a-typography-title>
            <a-typography-text mark>Чтобы не потерять доступ.</a-typography-text>
          </a-flex>
        </div>
      </a-carousel>
    </a-col>
  </a-row>
</template>

<style scoped></style>
