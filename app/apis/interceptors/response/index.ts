import type { AxiosInstance } from 'axios'
import onFulfilledResponse from './onFulfilled'
import onRejectedResponse from './onRejected'

export default function responseInterceptors($axios: AxiosInstance) {
  $axios.interceptors.response.use(onFulfilledResponse, onRejectedResponse)
}
