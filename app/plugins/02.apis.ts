import axios from 'axios'
import interceptorsRequest from '@apis/interceptors/request/'
import interceptorsResponse from '@apis/interceptors/response'
import { createApis, defaultHeader } from '@apis'

export default defineNuxtPlugin(() => {
  const $axios = axios.create({
    headers: defaultHeader
  })

  interceptorsRequest($axios)
  interceptorsResponse($axios)

  const apis = createApis($axios)

  return {
    provide: {
      apis
    }
  }
})
