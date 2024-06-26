<script setup lang="ts">
  import { definePageMeta, notification, useAuthStore, useRouter } from '#imports'
  import { reactive } from 'vue'
  import { RoutesNames } from '~/services/constants/routesNames'
  import { handleError } from '~/services/utils/handleError'

  definePageMeta({
    layout: 'auth-layout'
  })
  const authStore = useAuthStore()
  const router = useRouter()

  interface FormState {
    username: string
    email: string
    password: string
    repeatPassword: string
    role: 'user'
    typeRegister: 'user' | 'company'
  }

  const formState = reactive<FormState>({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    role: 'user',
    typeRegister: 'user'
  })
  const onFinish = async (values: any) => {
    try {
      console.log('success', values)
      const transformData = {
        name: values.username,
        email: values.email,
        password: values.password,
        confirm_password: values.repeatPassword,
        role: 'user'
      }
      await authStore.register(transformData)

      if (authStore.isAuth) {
        await authStore.profile()
        if (values.typeRegister === 'company') {
          await router.push(RoutesNames.PLATFORM_COMPANY)
        } else {
          await router.push(RoutesNames.PLATFORM)
        }
        notification.success({
          message: 'Удачная авторизация',
          description: 'Вы успещно вошли в систему.'
        })
      }
    } catch (error) {
      handleError(error)
      notification.error({
        message: 'Ошибка авторизации',
        description: 'Невалиданые данные'
      })
    }
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo)
  }
</script>

<template>
  <a-row class="w-full" :gutter="[32, 8]" align="center">
    <a-col :span="8">
      <div class="rounded-lg shadow-lg bg-white">
        <a-form
          :model="formState"
          autocomplete="off"
          class="px-12 pb-4"
          @finish="onFinish($event)"
          @finish-failed="onFinishFailed($event)"
        >
          <a-typography-title class="py-10" :level="2">Зарегистрироваться</a-typography-title>
          <a-form-item name="typeRegister" size="large">
            <a-radio-group
              v-model:value="formState.typeRegister"
              class="w-full flex"
              button-style="solid"
            >
              <a-radio-button value="user" class="w-full text-center">Пользователь</a-radio-button>
              <a-radio-button value="company" class="w-full text-center">Компания</a-radio-button>
            </a-radio-group>
          </a-form-item>
          <a-form-item
            name="username"
            :rules="[{ required: true, message: 'Пожалуйста введите ваше имя!' }]"
          >
            <a-input v-model:value="formState.username" placeholder="Имя пользователя">
              <template #prefix>
                <user-outlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            name="email"
            :rules="{ required: true, type: 'email', message: 'Пожалуйста введите ваш E-mail!' }"
          >
            <a-input v-model:value="formState.email" placeholder="E-mail">
              <template #prefix>
                <mail-outlined />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            name="password"
            :rules="[{ required: true, message: 'Пожалуйста введите пароль!' }]"
          >
            <a-input-password v-model:value="formState.password" placeholder="Пароль">
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item
            name="repeatPassword"
            :rules="[
              { required: true, message: 'Пожалуйста повторите пароль!' },
              {
                validator: async (rule, value) => {
                  if (value !== formState.password) {
                    throw new Error('Пароли не совпадают')
                  }
                },
                trigger: 'blur'
              }
            ]"
          >
            <a-input-password v-model:value="formState.repeatPassword" placeholder="Повтори пароль">
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button
              html-type="submit"
              type="ghost"
              size="large"
              shape="round"
              block
              class="w-full bg-blue-500 text-white hover:text-white bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-colors"
              >Зарегистрироваться</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </a-col>
    <a-col :span="12">
      <a-carousel autoplay arrows class="max-w-[400px]">
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 100">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div>
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
        <div>
          <a-flex vertical align="center" justify="center">
            <img
              src="~/assets/images/shield/shield-password.webp"
              alt=""
              width="336"
              height="124"
              class="object-contain w-full"
            />

            <a-typography-text mark> Пароль должен быть</a-typography-text>
            <a-typography-title :level="4">сложным и уникальным</a-typography-title>
          </a-flex>
        </div>
      </a-carousel>
    </a-col>
  </a-row>
</template>

<style scoped>
  :deep(.slick-arrow.custom-slick-arrow) {
    @apply w-[25px] h-[25px] text-zinc-300 text-[25px];
  }
  :deep(.slick-arrow.custom-slick-arrow:before) {
    @apply hidden;
  }
  :deep(.slick-arrow.custom-slick-arrow:hover) {
    @apply text-zinc-300/50;
  }
</style>
