import { HttpResponse } from '@src/presentation/protocols/http'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
