import { LoadTicketByIdUseCase } from '@src/domain/protocols/ticket'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { TicketViewModel } from '@src/presentation/view-models'

type TicketByIdRequest = {
  id: string
}

export class LoadTicketByIdController implements Controller {
  constructor(private readonly loadTicketByIdUseCase: LoadTicketByIdUseCase) {}

  async handle(
    request: TicketByIdRequest
  ): Promise<HttpResponse<TicketViewModel>> {
    try {
      const ticket = await this.loadTicketByIdUseCase.call(request.id)

      return serverSuccess(TicketViewModel.map(ticket))
    } catch (error) {
      return serverError(error)
    }
  }
}
