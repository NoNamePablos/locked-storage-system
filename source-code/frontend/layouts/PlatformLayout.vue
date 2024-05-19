<script setup lang="ts">
  import { ref, watch, h } from 'vue'
  import { Logo } from '~/components/image-components'
  import {
    RightOutlined,
    LeftOutlined,
    UserOutlined,
    DatabaseOutlined,
    ExperimentOutlined,
    ExclamationCircleOutlined
  } from '@ant-design/icons-vue'
  import { RoutesNames } from '~/services/constants/routesNames'
  import { PermissionsType } from '~/services/constants/PermissionsType'
  import { useAuthStore } from '~/stores/auth'
  import { storeToRefs, useRouter } from '#imports'
  import { Modal } from '#imports'

  const router = useRouter()

  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)

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

  const platrformNav = ref([
    {
      to: RoutesNames.WORKSPACE_COMPANY,
      title: 'Пользователи',
      permission: PermissionsType.ALL,
      icon: h(DatabaseOutlined)
    },
    {
      to: RoutesNames.WORKSPACE_USERS,
      title: 'Пользователи',
      permission: PermissionsType.ALL,
      icon: h(UserOutlined)
    },
    {
      to: RoutesNames.RECORDS,
      title: 'Мое пространство',
      permission: PermissionsType.ALL,
      icon: h(ExperimentOutlined)
    }
  ])

  const typeOfAccount = ref('Компания')

  console.log(user.value)

  const logout = () => {
    console.log('clicked')
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      icon: h(ExclamationCircleOutlined),
      onOk() {
        authStore.logout()
        router.push('/login')
      },
      onCancel() {}
    })
  }

  watch(value, val => {
    console.log(`selected:`, val)
  })
</script>

<template>
  <a-layout class="h-full">
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
      <div
        class="pt-4 border-solid border-transparent border-t-gray-200 border-0 border-t-[1px] h-full border-r-[1px] border-r-gray-200"
      >
        <a-menu mode="inline" style="border: none">
          <a-menu-item v-for="(nav, idx) in platrformNav" :key="idx">
            <nuxt-link :to="nav.to">
              <component :is="nav.icon" />
              <span>{{ nav.title }}</span>
            </nuxt-link>
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
          <div v-if="user?.companyId">{{ typeOfAccount }}</div>
          <a-popover v-model:open="visible" trigger="click">
            <template #content>
              <a-menu style="border: none" :selectable="false">
                <a-menu-item key="1">
                  <nuxt-link :to="RoutesNames.SETTINGS">
                    <user-outlined />
                    <span>Настройки</span>
                  </nuxt-link>
                </a-menu-item>
                <a-menu-item key="3">
                  <div class="flex" @click="logout">
                    <login-outlined />
                    <span>Выход</span>
                  </div>
                </a-menu-item>
              </a-menu>
            </template>
            <div class="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg">
              <a-avatar v-if="!user?.avatar" style="background-color: #87d068">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
              <a-avatar v-else :src="userAvatar" />
              <div>{{ user?.email }}</div>
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
        <div
          class="bg-white h-full border-solid border-transparent border-t-gray-200 border-0 border-t-[1px]"
        >
          <slot />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
