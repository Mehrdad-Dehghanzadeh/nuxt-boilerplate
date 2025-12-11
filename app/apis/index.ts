import type {
  AxiosInstance,
  RawAxiosRequestHeaders,
  AxiosHeaders,
  HeadersDefaults
} from 'axios'

export const defaultHeader:
  | RawAxiosRequestHeaders
  | AxiosHeaders
  | Partial<HeadersDefaults> = {}

export const createApis = ($axios: AxiosInstance) => ({})
