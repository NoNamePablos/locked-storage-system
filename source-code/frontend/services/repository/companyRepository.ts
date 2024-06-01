import { useNuxtApp } from '#imports'

/*todo: ts types*/

const companyRepository = {
  register: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/company/store', params)
    return response.data.data
  },
  show: async (id: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/company/show', {
      params: {
        company_id: id
      }
    })
    return response.data.data
  },
  users: async (id: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/company/users', {
      params: {
        company_id: id
      }
    })
    return response.data.data
  },
  fetchUserById: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/company/current-user', params)
    return response.data.data
  },
  registerUser: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = $http.post('/api/auth/register', params)
    return response
  },
  deleteUser: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/company/delete-user', params)
    return response.data.data
  },
  addUser: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/company/user', params)
    return response.data.data
  }
}
export default companyRepository
