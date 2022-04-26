import { DeleteQueueUseCase } from '@/domain/protocol'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

type DeleteRequest = {
  id: string
}

export class DeleteQueueController implements Controller {
  constructor(private readonly deleteQueueUseCase: DeleteQueueUseCase) {}

  async handle(request: DeleteRequest): Promise<HttpResponse<any>> {
    try {
      const queueId = await this.deleteQueueUseCase.delete(request.id)
      return serverSuccess(queueId)
    } catch (error) {
      return serverError(error)
    }
  }
}
