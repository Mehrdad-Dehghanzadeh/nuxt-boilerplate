import type { TCreateAuthResource } from './types'

export const createAuthApi: TCreateAuthResource = ($axios) => ({
  login(payload) {
    return $axios.post('/user', payload)
  }
})
