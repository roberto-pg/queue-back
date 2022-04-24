import { LoadQueuesUseCase } from '@/domain/protocol/load-queues'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { QueueViewModel } from '@/presentation/view_models'
import { serverSuccess, serverError } from '../helpers/http-helper'

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
