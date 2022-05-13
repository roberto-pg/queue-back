import { HttpResponse } from '@src/presentation/protocols/http'

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.message,
})

export const serverSuccess = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
})
