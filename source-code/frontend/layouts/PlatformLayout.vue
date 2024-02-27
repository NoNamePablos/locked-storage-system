<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { Logo } from '~/components/image-components'
  import { RightOutlined, LeftOutlined } from '@ant-design/icons-vue'

  const collapsed = ref<boolean>(false)
  const selectedKeys = ref<string[]>(['1'])

  const visible = ref<boolean>(false)

  const value = ref(['ru'])
  const options = ref([
    {
      value: 'ru',
      icon: '🇷🇺'
    },
    {
      value: 'en',
      icon: '🇬🇧'
    }
  ])

  const typeOfAccount = ref('Компания')
  const userAvatar = ref('https://www.antdv.com/assets/logo.1ef800a8.svg')
  const userEmail = ref('user22@mail.ru')

  watch(value, val => {
    console.log(`selected:`, val)
  })
</script>

<template>
  <a-layout class="h-screen">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible theme="light">
      <div class="h-[48px] p-2 flex justify-between">
        <nuxt-link to="/platform" class="text-black">
          <a-tooltip title="Вернуть на главную">
            <Logo />
          </a-tooltip>
        </nuxt-link>
        <a-button
          v-if="collapsed"
          size="medium"
          :icon="h(RightOutlined)"
          @click="() => (collapsed = !collapsed)"
        />
        <a-button
          v-else
          size="medium"
          :icon="h(LeftOutlined)"
          @click="() => (collapsed = !collapsed)"
        />
      </div>
      <div class="pt-4 border-solid border-transparent border-t-gray-200 border-0 border-t-[1px]">
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item key="1">
            <database-outlined />
            <span>Пространство</span>
          </a-menu-item>
          <a-menu-item key="2">
            <user-outlined />
            <span>Пользователи</span>
          </a-menu-item>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <header class="h-[48px] flex bg-white px-8 justify-between">
        <div class="flex items-center gap-4">
          <div class="w-[60px]">
            <a-select
              v-model:value="value"
              option-label-prop="icon"
              :options="options"
              class="w-full"
            >
              <template #option="{ value: val, icon }">
                <span role="img" :aria-label="val">{{ icon }}</span>
              </template>
            </a-select>
          </div>
        </div>
        <div class="flex gap-8 items-center">
          <div>{{ typeOfAccount }}</div>
          <a-popover v-model:open="visible" trigger="click">
            <template #content>
              <a-menu style="border: none">
                <a-menu-item key="1">
                  <user-outlined />
                  <span>Настройки</span>
                </a-menu-item>
                <a-menu-item key="3">
                  <login-outlined />
                  <span>Выход</span>
                </a-menu-item>
              </a-menu>
            </template>
            <div class="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg">
              <a-avatar v-if="!userAvatar" style="background-color: #87d068">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
              <a-avatar v-else :src="userAvatar" />
              <div>{{ userEmail }}</div>
              <div class="transition-all">
                <UpOutlined
                  :class="[
                    { 'rotate-180 transition-all': !visible },
                    'transition-all duration-500'
                  ]"
                />
              </div>
            </div>
          </a-popover>
        </div>
      </header>
      <a-layout-content>
        <div class="p-8">
          <slot />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
