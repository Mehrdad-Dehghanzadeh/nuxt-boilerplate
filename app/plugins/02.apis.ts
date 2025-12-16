import type { TApisPlugin, TApis } from '@type/apis/ApiConfig'
import axios from 'axios'
import interceptorsRequest from '@apis/interceptors/request/'
import interceptorsResponse from '@apis/interceptors/response'
import { createApis, defaultHeader } from '@apis'

function setup() {
  const $axios = axios.create({
    headers: defaultHeader
  })

  interceptorsRequest($axios)
  interceptorsResponse($axios)

  const apis: TApis = createApis($axios)

  return {
    provide: {
      apis
    }
  }
}

export default defineNuxtPlugin<TApisPlugin>({
  name: 'apis',
  setup
})
