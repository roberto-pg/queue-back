import { AddOrderUseCase } from '@src/domain/protocols/order'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { OrderViewModel } from '@src/presentation/view-models'
import { customException } from '@src/data/errors'

type AddOrderRequest = {
  queueId: string
  position: number
  timestamp: string
  status: string
}

export class AddOrderController implements Controller {
  constructor(private readonly addOrder: AddOrderUseCase) {}

  async handle(
    request: AddOrderRequest
  ): Promise<HttpResponse<OrderViewModel>> {
    try {
      if (!request.queueId) {
        throw customException('Informe o Id da fila')
      }

      if (!request.position) {
        throw customException('Informe a posição')
      }

      if (!request.timestamp) {
        throw customException('Informe o horário')
      }

      if (!request.status) {
        throw customException('Informe o status')
      }

      const order = await this.addOrder.add(
        request.queueId,
        request.position,
        request.timestamp,
        request.status
      )

      return serverSuccess(order)
    } catch (error) {
      return serverError(error)
    }
  }
}
