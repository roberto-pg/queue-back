import { AddOrderUseCase } from '@/domain/protocols/order'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { OrderViewModel } from '@/presentation/view-models'
import { customException } from '@/data/errors'

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
