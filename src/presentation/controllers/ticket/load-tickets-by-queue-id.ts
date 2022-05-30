import { LoadTicketsByQueueIdUseCase } from '@src/domain/protocols/ticket'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'
import { serverSuccess, serverError } from '@src/presentation/helpers'

type TicketsByQueueRequest = {
  queueId: string
}

export class LoadTicketsByQueueIdController implements Controller {
  constructor(
    private readonly ticketsByQueueIdUseCase: LoadTicketsByQueueIdUseCase
  ) {}

  async handle(
    request: TicketsByQueueRequest
  ): Promise<HttpResponse<TicketViewModel[]>> {
    try {
      const tickets = await this.ticketsByQueueIdUseCase.call(request.queueId)

      return serverSuccess(TicketViewModel.mapCollection(tickets))
    } catch (error) {
      return serverError(error)
    }
  }
}
