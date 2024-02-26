import { defineStore } from 'pinia'

interface ISettingsStore {
  isMobile: boolean
}
export const useSettingsStore = defineStore('settings', {
  state: (): ISettingsStore => ({
    isMobile: false
  })
})
