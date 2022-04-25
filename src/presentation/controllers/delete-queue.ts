import { Controller, HttpResponse } from '@/presentation/protocols'
import { DeleteQueueUseCase } from '../../domain/protocol/delete-queue'
import { serverSuccess, serverError } from '../helpers/http-helper'

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
