import { AddQueueUseCase } from '@/domain/protocol'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { QueueViewModel } from '@/presentation/view_models'

type AddQueueRequest = {
  title: string
  abbreviation: string
  priority: number
}

export class AddQueueController implements Controller {
  constructor(private readonly addQueue: AddQueueUseCase) {}

  async handle(
    request: AddQueueRequest
  ): Promise<HttpResponse<QueueViewModel>> {
    try {
      const queue = await this.addQueue.add(
        request.title,
        request.abbreviation,
        request.priority
      )

      return serverSuccess(queue)
    } catch (error) {
      return serverError(error)
    }
  }
}
