import { customException } from '@src/data/errors'
import { UpdateTicketServiceDeskUseCase } from '@src/domain/protocols/ticket'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'

type UpdateServiceDeskRequest = {
  id: string
  serviceDesk: number
}

export class UpdateTicketServiceDeskController implements Controller {
  constructor(
    private readonly updateServiceDeskUseCase: UpdateTicketServiceDeskUseCase
  ) {}

  async handle(
    request: UpdateServiceDeskRequest
  ): Promise<HttpResponse<TicketViewModel>> {
    try {
      if (!request.id) {
        throw customException('Informe o ID do ticket')
      }

      if (!request.serviceDesk) {
        throw customException('Informe o guichê')
      }

      const ticket = await this.updateServiceDeskUseCase.call(
        request.id,
        request.serviceDesk
      )
      return serverSuccess(TicketViewModel.map(ticket))
    } catch (error) {
      return serverError(error)
    }
  }
}
