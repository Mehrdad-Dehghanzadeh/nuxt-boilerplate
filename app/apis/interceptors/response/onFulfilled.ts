import type { AxiosResponse } from 'axios'

export default function onFulfilledResponse<T = AxiosResponse>(
  response: T
): T | Promise<T> {
  return response
}
