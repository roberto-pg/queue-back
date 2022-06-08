import { customException } from '@src/data/errors'
import { UpdateTicketCallSequenceUseCase } from '@src/domain/protocols/ticket'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'

type UpdateCallSequenceRequest = {
  id: string
  callSequence: number
}

export class UpdateTicketCallSequenceController implements Controller {
  constructor(
    private readonly updateCallSequenceUseCase: UpdateTicketCallSequenceUseCase
  ) {}

  async handle(
    request: UpdateCallSequenceRequest
  ): Promise<HttpResponse<TicketViewModel>> {
    try {
      if (!request.id) {
        throw customException('Informe o ID do ticket')
      }

      const ticket = await this.updateCallSequenceUseCase.call(
        request.id,
        request.callSequence
      )
      return serverSuccess(TicketViewModel.map(ticket))
    } catch (error) {
      return serverError(error)
    }
  }
}
