import { LoadTicketsByCallSequenceUseCase } from '@src/domain/protocols/ticket'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'
import { serverSuccess, serverError } from '@src/presentation/helpers'

export class LoadTicketsByCallSequenceController implements Controller {
  constructor(
    private readonly ticketsByCallSequenceUseCase: LoadTicketsByCallSequenceUseCase
  ) {}

  async handle(): Promise<HttpResponse<TicketViewModel[]>> {
    try {
      const tickets = await this.ticketsByCallSequenceUseCase.call()

      return serverSuccess(TicketViewModel.mapCollection(tickets))
    } catch (error) {
      return serverError(error)
    }
  }
}
