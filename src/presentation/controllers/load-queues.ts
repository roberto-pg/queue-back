import { LoadQueuesUseCase } from '@/domain/protocol'
import { serverError, serverSuccess } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { QueueViewModel } from '@/presentation/view-models'

export class LoadQueuesController implements Controller {
  constructor(private readonly loadQueuesUseCase: LoadQueuesUseCase) {}

  async handle(): Promise<HttpResponse<QueueViewModel>> {
    try {
      const queues = await this.loadQueuesUseCase.load()
      return serverSuccess(queues)
    } catch (error) {
      return serverError(error)
    }
  }
}
