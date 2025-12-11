import type { AxiosRequestConfig } from 'axios'

export default function onFulfilledRequest<T = AxiosRequestConfig>(
  config: T
): T | Promise<T> {
  return config
}
