import { LoadOrdersByQueueIdUseCase } from '@src/domain/protocols/order'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { OrderViewModel } from '@src/presentation/view-models'
import { serverSuccess, serverError } from '@src/presentation/helpers'

type OrdersByQueueRequest = {
  queueId: string
}

export class LoadOrdersByQueueIdController implements Controller {
  constructor(
    private readonly ordersByQueueIdUseCase: LoadOrdersByQueueIdUseCase
  ) {}

  async handle(
    request: OrdersByQueueRequest
  ): Promise<HttpResponse<OrderViewModel[]>> {
    try {
      const orders = await this.ordersByQueueIdUseCase.load(request.queueId)

      return serverSuccess(OrderViewModel.mapCollection(orders))
    } catch (error) {
      return serverError(error)
    }
  }
}
