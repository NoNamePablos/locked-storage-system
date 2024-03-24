import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig, abortNavigation } from '#imports'

export default defineNuxtRouteMiddleware(to => {
  const { authTokenKey } = useRuntimeConfig().public

  const token = localStorage.getItem(authTokenKey)

  if (token && to?.name === 'login') {
    return navigateTo('/platform')
  }
  if (!token && to.name !== 'login') {
    abortNavigation()
    return navigateTo('/login')
  }
})
