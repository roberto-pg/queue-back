import { RemoveTicketsUseCase } from '@src/domain/protocols/ticket'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'

export class RemoveTicketsController implements Controller {
  constructor(private readonly removeTicketsUseCase: RemoveTicketsUseCase) {}

  async handle(): Promise<HttpResponse<unknown>> {
    try {
      const result = await this.removeTicketsUseCase.call()
      return serverSuccess(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
