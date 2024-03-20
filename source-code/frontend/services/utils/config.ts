import { useRuntimeConfig } from '#imports'

const config = () => {
  const { apiUrl, authTokenKey } = useRuntimeConfig().public
  return { apiUrl, authTokenKey }
}
export default {
  apiUrl: config().apiUrl,
  authTokenKey: config().authTokenKey
}
