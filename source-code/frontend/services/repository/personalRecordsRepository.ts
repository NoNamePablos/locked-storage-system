import { useNuxtApp } from '#imports'

/*todo: ts types*/

const personalRecordsRepository = {
  list: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/records', {
      params: {
        cluster_id: params.cluster_id
      }
    })
    return response.data.data
  },
  create: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/records/store', params)
    return response.data.data
  },
  update: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/records/update', params)
    return response.data.data
  },
  delete: async (id: number) => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/records/delete/${id}`)
    return response.data.data
  },
  findById: async (data: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/records/show', {
      params: {
        record_id: data.record_id
      }
    })
    return response.data.data
  },
  findById2: async (id: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get(`/api/company-cluster/${id}`)
    return response.data.data
  },
  search: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/records/search', params)
    return response.data.data
  }
}
export default personalRecordsRepository
