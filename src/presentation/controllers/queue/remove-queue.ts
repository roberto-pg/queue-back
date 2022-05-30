import { RemoveQueueUseCase } from '@src/domain/protocols/queue'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'

type DeleteRequest = {
  id: string
}

export class RemoveQueueController implements Controller {
  constructor(private readonly deleteQueueUseCase: RemoveQueueUseCase) {}

  async handle(request: DeleteRequest): Promise<HttpResponse<any>> {
    try {
      const queueId = await this.deleteQueueUseCase.call(request.id)
      return serverSuccess(queueId)
    } catch (error) {
      return serverError(error)
    }
  }
}
