import { LoadOrdersUseCase } from '@src/domain/protocols/order'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { OrderViewModel } from '@src/presentation/view-models'

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
