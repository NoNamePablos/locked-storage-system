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

  const visible = ref<boolean>(false)

  const companyNav = ref({
    to: RoutesNames.WORKSPACE_COMPANY,
    title: 'Компания',
    permission: PermissionsType.ALL,
    icon: h(DatabaseOutlined),
    subMenu: [
      {
        id: 1,
        to: RoutesNames.COMPANY_CLUSTER,
        title: 'Пространство компании',
        permission: PermissionsType.ALL,
        icon: h(UserOutlined)
      },
      {
        id: 2,
        to: RoutesNames.COMPANY_ROLES,
        title: 'Роли',
        permission: PermissionsType.ALL,
        icon: h(UserOutlined),
        isOwner: true
      },
      {
        id: 3,
        to: RoutesNames.WORKSPACE_COMPANY,
        title: 'Пользователи',
        permission: PermissionsType.ALL,
        icon: h(DatabaseOutlined),
        isOwner: true
      }
    ]
  })

  const computedComapnyOwner = computed(() => {
    return companyNav.value.subMenu.filter(item => item.isOwner)
  })

  const platrformNav = ref([
    {
      id: 12,
      to: RoutesNames.RECORDS,
      title: 'Мое пространство',
      permission: PermissionsType.ALL,
      icon: h(ExperimentOutlined)
    }
  ])

  const logout = () => {
    Modal.confirm({
      title: 'Вы точно хотите выйти?',
      icon: h(ExclamationCircleOutlined),
      onOk() {
        authStore.logout()
        router.push('/login')
      },
      onCancel() {}
    })
  }

  const settingsStore = useSettingsStore()
  const { isMobile } = storeToRefs(settingsStore)

  onMounted(() => {
    collapsed.value = isMobile.value
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
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <component :is="companyNav.icon" />
                <span v-if="!collapsed">{{ companyNav.title }}</span>
              </span>
            </template>

            <template v-for="nav in computedComapnyOwner">
              <a-menu-item v-if="nav.isOwner" :key="nav.id">
                <nuxt-link :to="nav.to">
                  <component :is="nav.icon" />
                  <span>{{ nav.title }}</span>
                </nuxt-link>
              </a-menu-item>
            </template>

            <template v-for="nav in companyNav.subMenu">
              <!--       nav.isOwner && user.companyId       -->
              <a-menu-item v-if="!nav.isOwner" :key="nav.id">
                <nuxt-link :to="nav.to">
                  <component :is="nav.icon" />
                  <span>{{ nav.title }}</span>
                </nuxt-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
          <a-menu-item v-for="nav in platrformNav" :key="nav.id">
            <nuxt-link :to="nav.to">
              <component :is="nav.icon" />
              <span>{{ nav.title }}</span>
            </nuxt-link>
          </a-menu-item>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <header class="h-[48px] flex bg-white px-8">
        <div class="flex gap-8 items-center ml-auto">
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
