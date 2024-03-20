import { useNuxtApp } from '#imports'

const personalRepository = {
  login: params => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/login', params)
  },
  register: params => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/register', params)
  },
  refresh: () => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/refresh')
  },
  profile: () => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/me')
  }
}
export default personalRepository
