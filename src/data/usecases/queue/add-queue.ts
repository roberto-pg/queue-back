import { QueueRepository } from '@/data/protocols/queue'
import { Queue } from '@/domain/entities'
import { AddQueueUseCase } from '@/domain/protocol'

export class AddQueueUseCaseImpl implements AddQueueUseCase {
  constructor(private readonly queueRepository: QueueRepository) {}

  async add(
    title: string,
    abbreviation: string,
    priority: number
  ): Promise<Queue> {
    const queue = this.queueRepository.addQueue(title, abbreviation, priority)

    return queue
  }
}
