import { LoadQueuesUseCase } from '@src/domain/protocols/queue'
import { serverError, serverSuccess } from '@src/presentation/helpers'
import { Controller } from '@src/presentation/protocols/controller'
import { HttpResponse } from '@src/presentation/protocols/http'
import { QueueViewModel } from '@src/presentation/view-models'

export class LoadQueuesController implements Controller {
  constructor(private readonly loadQueuesUseCase: LoadQueuesUseCase) {}

  async handle(): Promise<HttpResponse<QueueViewModel[]>> {
    try {
      const queues = await this.loadQueuesUseCase.load()
      return serverSuccess(queues)
    } catch (error) {
      return serverError(error)
    }
  }
}
