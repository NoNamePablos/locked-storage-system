import { defineStore } from 'pinia'
import personalRepository from '@/services/repository/personalRepository.ts'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuth: false,
    authTokenKey: 'JWT_SECRET',
    user: null
  }),
  actions: {
    async profile() {
      try {
        const response = await personalRepository.profile()
        this.user = response
        if (this.user) {
          this.isAuth = true
        }
      } catch (e) {
        console.log(e)
      }
    },
    async refresh() {
      try {
        const response = await personalRepository.refresh()
        const { data } = response
        const newToken = data.original.access_token
        localStorage.setItem(this.authTokenKey, newToken)
        this.isAuth = true
      } catch (e) {
        console.log(e)
      }
    },
    async login(params) {
      const response = await personalRepository.login(params)
      const { data } = response
      const newToken = data.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      this.isAuth = true
    },
    removeToken() {
      localStorage.removeItem(this.authTokenKey)
      localStorage.removeItem('auth')
      this.isAuth = false
      this.user = null
    },
    logout() {
      this.removeToken()
    },
    async register(params) {
      const response = await personalRepository.register(params)
      const newToken = response.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      this.isAuth = true
    },
    getToken() {
      const token = localStorage.getItem(this.authTokenKey)
      if (!token) {
        this.removeToken()
        return null
      }
      return token
    }
  },
  getters: {
    isLoginIn(state) {
      return state.isAuth
    },
    getUser(state) {
      return state.user
    }
  },
  persist: true
})
