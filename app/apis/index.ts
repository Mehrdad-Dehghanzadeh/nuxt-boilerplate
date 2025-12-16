import type { TDefaultHeader } from '@type/apis/ApiConfig'
import type { AxiosInstance } from 'axios'
import { createAuthApi } from './resources'

export const defaultHeader: TDefaultHeader = {}

export const createApis = ($axios: AxiosInstance) => ({
  auth: createAuthApi($axios)
})
