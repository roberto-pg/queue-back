import { QueueModel } from '@/data/models'
import { LoadQueuesUseCase } from '@/domain/protocol/load-queues'
import { QueueRepository } from '../../protocols/queue/queue-repository'

export class LoadQueuesUseCaseImpl implements LoadQueuesUseCase {
  constructor(private readonly queueRepository: QueueRepository) {}

  async load(): Promise<QueueModel[]> {
    const queues = await this.queueRepository.load()
    return queues
  }
}
