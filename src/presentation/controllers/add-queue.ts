import { customException } from '@/data/errors'
import { AddQueueUseCase } from '@/domain/protocol'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { QueueViewModel } from '@/presentation/view-models'

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
      if (!request.title) {
        throw customException('Informe o título')
      }

      if (!request.abbreviation) {
        throw customException('Informe a abreviação')
      }

      if (!request.priority) {
        throw customException('Informe a prioridade')
      }

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
