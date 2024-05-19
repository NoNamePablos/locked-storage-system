import { useNuxtApp } from '#imports'
import type { IUserLogin } from '~/services/models'

/*todo: ts types*/

const personalRepository = {
  login: (params: IUserLogin) => {
    const { $http } = useNuxtApp()
    const response = $http.post('/api/auth/login', params)
    return response
  },
  register: (params: IUserLogin) => {
    const { $http } = useNuxtApp()
    const { data } = $http.post('/api/auth/register', params)
    return data
  },
  refresh: () => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/refresh')
  },
  refreshPassword: data => {
    const { $http } = useNuxtApp()
    return $http.get('/api/mail', {
      params: {
        email: data.email
      }
    })
  },
  confirmRecovery: async params => {
    const { $http } = useNuxtApp()
    const { data } = await $http.post('/api/confirm-password', params)
    return data
  },
  profile: async () => {
    const { $http } = useNuxtApp()
    const { data } = await $http.post('/api/auth/me')
    return data
  },

  settingsList: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/auth/property?role=model')
    return response.data.data
  },

  save: async params => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/fill', params)
  }
}
export default personalRepository
