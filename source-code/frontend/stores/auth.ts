import { defineStore } from 'pinia'
import personalRepository from '~/services/repository/personalRepository'
import config from '~/services/utils/config'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuth: false,
    authTokenKey: config.authTokenKey,
    user: null,
    refreshTimerId: null,
    refreshDelayMinutes: 30
  }),
  actions: {
    async refresh() {
      try {
        const response = await personalRepository.refresh()
        const { data } = response
        const newToken = data.token.original.access_token
        localStorage.setItem(this.authTokenKey, newToken)
        this.isAuth = true
        if (this.refreshTimerId === null) {
          this.startRefreshInterval()
        }
      } catch (e) {
        console.log(e)
      }
    },
    async login(params) {
      const response = await personalRepository.login(params)
      const { data } = response
      const newToken = data.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      this.isAuth = true
      this.startRefreshInterval()
    },
    logout() {
      this.removeToken()
    },
    removeToken() {
      localStorage.removeItem(this.authTokenKey)
      this.isAuth = false
      this.stopRefreshInterval()
    },
    startRefreshInterval() {
      this.refreshTimerId = setInterval(this.refresh, 1000 * 60 * this.refreshDelayMinutes)
    },
    stopRefreshInterval() {
      clearInterval(this.refreshTimerId)
      this.refreshTimerId = null
    },
    async register(params) {
      const response = await personalRepository.register(params)
      const { data } = response
      const newToken = data.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      this.isAuth = true
      this.startRefreshInterval()
    }
  }
})
