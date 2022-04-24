import { QueueModel } from '@/data/models'
import { QueueRepository } from '@/data/protocols/queue'
import { AddQueueUseCase } from '@/domain/protocol'

export class AddQueueUseCaseImpl implements AddQueueUseCase {
  constructor(private readonly queueRepository: QueueRepository) {}

  async add(
    title: string,
    abbreviation: string,
    priority: number
  ): Promise<QueueModel> {
    const queue = this.queueRepository.addQueue(title, abbreviation, priority)

    return queue
  }
}
