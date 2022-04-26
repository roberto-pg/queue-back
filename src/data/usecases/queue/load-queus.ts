import { QueueModel } from '@/data/models'
import { QueueRepository } from '@/data/protocols/queue'
import { LoadQueuesUseCase } from '@/domain/protocol'

export class LoadQueuesUseCaseImpl implements LoadQueuesUseCase {
  constructor(private readonly queueRepository: QueueRepository) {}

  async load(): Promise<QueueModel[]> {
    const queues = await this.queueRepository.load()
    return queues
  }
}
