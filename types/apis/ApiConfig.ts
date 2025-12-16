import type {
  AxiosInstance,
  RawAxiosRequestHeaders,
  AxiosHeaders,
  HeadersDefaults,
  AxiosResponse
} from 'axios'
import type { TAuthResource } from '@apis/resources'

export type TDefaultHeader = (
  | RawAxiosRequestHeaders
  | AxiosHeaders
  | Partial<HeadersDefaults>
) & {}

export type TCreateResource<T> = ($axios: AxiosInstance) => T

export interface TResponseApi<T> extends Promise<AxiosResponse<T>> {}

export type TApis = {
  auth: TAuthResource
}

export type TApisPlugin = {
  apis: TApis
}
