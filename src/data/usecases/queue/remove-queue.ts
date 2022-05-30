import { QueueRepository } from '@src/data/protocols/queue'
import { RemoveQueueUseCase } from '@src/domain/protocols/queue'

export class RemoveQueueUseCaseImpl implements RemoveQueueUseCase {
  constructor(private readonly queueRepository: QueueRepository) {}

  async call(id: string): Promise<string> {
    const result = await this.queueRepository.removeQueueById(id)
    return result
  }
}
