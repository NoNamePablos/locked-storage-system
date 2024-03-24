import { useRouter } from '#imports'
import settings from '~/services/utils/config'
import { RoutesNames } from '~/services/constants/routesNames'
export function handleError(error) {
  const router = useRouter()

  if (error.response?.status === 401) {
    router.push(RoutesNames.LOGIN)
    localStorage.removeItem(settings.authTokenKey)
    return {}
  }
  return {}
}
