import { QueueModel } from '@src/data/models'
import { QueueRepository } from '@src/data/protocols/queue'
import { LoadQueuesUseCase } from '@src/domain/protocols/queue'

export class LoadQueuesUseCaseImpl implements LoadQueuesUseCase {
  constructor(private readonly queueRepository: QueueRepository) {}

  async call(): Promise<QueueModel[]> {
    const queues = await this.queueRepository.load()
    return queues
  }
}
