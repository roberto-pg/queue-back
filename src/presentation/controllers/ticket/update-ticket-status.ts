import { UpdateTicketStatusUseCase } from '@src/domain/protocols/ticket'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'
import { customException } from '@src/data/errors'

type UpdateTicketStatusRequest = {
  id: string
  status: string
}

export class UpdateTicketStatusController implements Controller {
  constructor(private readonly updateTicketStatus: UpdateTicketStatusUseCase) {}

  async handle(
    request: UpdateTicketStatusRequest
  ): Promise<HttpResponse<TicketViewModel>> {
    try {
      if (!request.id) {
        throw customException('Informe o ID do ticket')
      }

      if (!request.status) {
        throw customException('Informe o novo status')
      }

      const ticket = await this.updateTicketStatus.call(
        request.id,
        request.status
      )
      return serverSuccess(TicketViewModel.map(ticket))
    } catch (error) {
      return serverError(error)
    }
  }
}
