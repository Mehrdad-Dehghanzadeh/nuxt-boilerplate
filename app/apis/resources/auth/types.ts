import type { TCreateResource, TResponseApi } from '@type/apis/ApiConfig'
import type { TLoginPayload, TLoginDataResponse } from '@type/apis/TAuth'

export type TAuthResource = {
  login: (payload: TLoginPayload) => TResponseApi<TLoginDataResponse>
}

export type TCreateAuthResource = TCreateResource<TAuthResource>
