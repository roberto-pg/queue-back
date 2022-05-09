import { LoadOrdersUseCase } from '@/domain/protocols/order'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { OrderViewModel } from '@/presentation/view-models'

export class LoadOrdersController implements Controller {
  constructor(private readonly loadOrdersUseCase: LoadOrdersUseCase) {}

  async handle(): Promise<HttpResponse<OrderViewModel[]>> {
    try {
      const orders = await this.loadOrdersUseCase.load()

      return serverSuccess(OrderViewModel.mapCollection(orders))
    } catch (error) {
      return serverError(error)
    }
  }
}
