import type { AxiosInstance } from 'axios'
import onFulfilledRequest from './onFulfilled'
import onRejectedRequest from './onRejected'

export default function requestInterceptors($axios: AxiosInstance) {
  $axios.interceptors.request.use(onFulfilledRequest, onRejectedRequest)
}
