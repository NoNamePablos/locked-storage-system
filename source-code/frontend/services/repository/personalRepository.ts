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
  profile: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/auth/me')

    return {
      avatar: response.data.avatar,
      companyId: response.data.company_id,
      companyRoleId: response.data.company_role_id,
      email: response.data.email,
      emailVerifiedAd: response.data.email_verified_ad,
      id: response.data.id,
      name: response.data.name,
      role: response.data.role,
      updatedAt: response.data.updated_at
    }
  }
}
export default personalRepository
