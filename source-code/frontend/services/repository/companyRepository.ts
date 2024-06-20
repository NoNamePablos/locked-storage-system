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

  fetchUserClusters: async (params: unknown) => {
    const { $http } = useNuxtApp()
    console.log(params)
    const response = await $http.get('/api/company-cluster/users/show', {
      params: {
        cluster_id: params?.cluster_id
      }
    })
    return response.data.data
  },
  deleteUserFormCluster: async (id: number) => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/company-cluster/users/delete/${id}`)
    return response.data.data
  },
  registerUser: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/auth/register', params)
    return response
  },
  updateUser: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/users/update', params)
    return response.data.data
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
  },
  storeUserToCluster: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/company-cluster', params)
    return response.data.data
  },
  searchUsers: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/company/search-user', params)
    return response.data.data
  }
}
export default companyRepository
