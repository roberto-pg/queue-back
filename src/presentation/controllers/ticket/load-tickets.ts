import { LoadTicketsUseCase } from '@src/domain/protocols/ticket'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'

export class LoadTicketsController implements Controller {
  constructor(private readonly loadTicketsUseCase: LoadTicketsUseCase) {}

  async handle(): Promise<HttpResponse<TicketViewModel[]>> {
    try {
      const tickets = await this.loadTicketsUseCase.call()

      return serverSuccess(TicketViewModel.mapCollection(tickets))
    } catch (error) {
      return serverError(error)
    }
  }
}
