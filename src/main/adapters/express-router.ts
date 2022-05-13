import { Controller } from '@src/presentation/protocols/controller'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const requestBody = {
      ...(request.body || {}),
      ...(request.params || {}),
    }

    const httpResponse = await controller.handle(requestBody)
    response.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
