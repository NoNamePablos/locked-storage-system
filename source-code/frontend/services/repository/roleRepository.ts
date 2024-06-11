import { useNuxtApp } from '#imports'

/*todo: ts types*/

const roleRepository = {
  list: async (roleId: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get(`api/role/all-role?company_id=${roleId}`)
    return response.data.data
  },
  create: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/role/add-role', params)
    return response.data.data
  },
  update: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/role/update', params)
    return response.data.data
  },
  delete: async params => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/role/delete`, params)
    return response.data.data
  },
  addRoleToUser: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/role/add-user-role`, params)
    return response.data.data
  },
  findById: async (data: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/clusters/show', {
      params: {
        password: data.password,
        user_id: data.user_id,
        cluster_id: data.cluster_id
      }
    })

    return response.data.data
  },
  search: async (companyId: number, role_id: number) => {
    const { $http } = useNuxtApp()
    const response = await $http.get(
      `/api/role/search-user-by-role?company_id=${companyId}&role_id=${role_id}`
    )
    return response.data.data
  },
  searchRoles: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/role/search', params)
    return response.data.data
  }
}
export default roleRepository
