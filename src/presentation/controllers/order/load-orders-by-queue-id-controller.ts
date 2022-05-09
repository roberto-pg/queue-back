import { LoadOrdersByQueueIdUseCase } from '@/domain/protocols/order'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { OrderViewModel } from '@/presentation/view-models'
import { serverSuccess, serverError } from '@/presentation/helpers'

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
