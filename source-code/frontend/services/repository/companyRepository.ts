import { useNuxtApp } from '#imports'
import { IUserLogin } from '~/services/models'

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
  addUser: (params: unknown) => {
    const { $http } = useNuxtApp()
    const { data } = $http.post('/api/auth/register', params)
    return data
  }
}
export default companyRepository
