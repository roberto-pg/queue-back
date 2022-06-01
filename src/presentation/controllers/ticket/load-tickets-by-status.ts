import { LoadTicketsByStatusUseCase } from '@src/domain/protocols/ticket'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'
import { customException } from '@src/data/errors'

type TicketsByStatusRequest = {
  status: string
}

export class LoadTicketsByStatusController implements Controller {
  constructor(
    private readonly loadTicketsByStatusUseCase: LoadTicketsByStatusUseCase
  ) {}

  async handle(
    request: TicketsByStatusRequest
  ): Promise<HttpResponse<TicketViewModel[]>> {
    try {
      if (!request.status) {
        throw customException('Informe o status')
      }

      const tickets = await this.loadTicketsByStatusUseCase.call(request.status)
      return serverSuccess(TicketViewModel.mapCollection(tickets))
    } catch (error) {
      return serverError(error)
    }
  }
}
