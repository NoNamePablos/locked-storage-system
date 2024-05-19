import { useNuxtApp } from '#imports'

/*todo: ts types*/

const clusterRepository = {
  list: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/clusters', params)
    return response.data.data
  },
  create: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/clusters/store', params)
    return response.data.data
  },
  update: async (params: unknown) => {
    const { $http } = useNuxtApp()
    const response = await $http.post('/api/clusters/update', params)
    return response.data.data
  },
  delete: async (id: number) => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/clusters/delete/${id}`)
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

    /*user_id: userStore.getUser.id,
        password: formState.password,
        cluster_id: clusterId.value
*/ return response.data.data
  }
}
export default clusterRepository
