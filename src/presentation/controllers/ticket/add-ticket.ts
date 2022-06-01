import { AddTicketUseCase } from '@src/domain/protocols/ticket'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'
import { customException } from '@src/data/errors'

type AddTicketRequest = {
  queueId: string
  position: number
  timestamp: string
  status: string
}

export class AddTicketController implements Controller {
  constructor(private readonly addTicket: AddTicketUseCase) {}

  async handle(
    request: AddTicketRequest
  ): Promise<HttpResponse<TicketViewModel>> {
    try {
      if (!request.queueId) {
        throw customException('Informe o Id da fila')
      }

      if (!request.position) {
        throw customException('Informe a posição')
      }

      if (!request.timestamp) {
        throw customException('Informe o horário')
      }

      if (!request.status) {
        throw customException('Informe o status')
      }

      const ticket = await this.addTicket.call(
        request.queueId,
        request.position,
        request.timestamp,
        request.status
      )

      return serverSuccess(TicketViewModel.map(ticket))
    } catch (error) {
      return serverError(error)
    }
  }
}
