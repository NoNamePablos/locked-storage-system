import { useRuntimeConfig, defineNuxtPlugin } from '#imports'
import axios, { type AxiosInstance } from 'axios'
import { stringify } from 'qs'
export default defineNuxtPlugin(() => {
  const { apiUrl, authTokenKey } = useRuntimeConfig().public
  const http = axios.create({
    baseURL: apiUrl,
    paramsSerializer: params => stringify(params)
  }) as AxiosInstance

  http.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem(authTokenKey)
      config.headers = {
        ...config.headers,
        ...(token && { Authorization: `Bearer ${token}` })
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      http
    }
  }
})
