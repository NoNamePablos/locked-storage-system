import { useStorage } from '@vueuse/core'
import { ref, type Ref } from 'vue'
import type { ECardsView } from '~/services/enums'
import { StorageKeys } from '~/services/constants/StorageKeys'

export function useTypeOfView(key: StorageKeys): {
  typeOfView: Ref<ECardsView>
  changeTypeOfView: (data: ECardsView) => void
} {
  const defaultType: { type: ECardsView } = { type: 1 }

  const state = useStorage(key, defaultType)

  const typeOfView: Ref<ECardsView> = ref(state.value.type)

  const changeTypeOfView = (data: ECardsView) => {
    state.value.type = data
    typeOfView.value = data
  }

  // Возвращаем реактивную переменную typeOfView
  return {
    typeOfView,
    changeTypeOfView
  }
}
