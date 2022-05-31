import { LoadQueueByTitleUseCase } from '@src/domain/protocols/queue'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { QueueViewModel } from '@src/presentation/view-models'

type LoadByTitleRequest = {
  title: string
}

export class LoadQueueByTitleController implements Controller {
  constructor(private readonly loadByTitleUseCase: LoadQueueByTitleUseCase) {}

  async handle(
    request: LoadByTitleRequest
  ): Promise<HttpResponse<QueueViewModel>> {
    try {
      const queue = await this.loadByTitleUseCase.call(request.title)
      return serverSuccess(queue)
    } catch (error) {
      return serverError(error)
    }
  }
}
