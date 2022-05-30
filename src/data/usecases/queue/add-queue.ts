import { customException } from '@src/data/errors'
import { QueueModel } from '@src/data/models'
import { QueueRepository } from '@src/data/protocols/queue'
import { AddQueueUseCase } from '@src/domain/protocols/queue'

export class AddQueueUseCaseImpl implements AddQueueUseCase {
  constructor(private readonly queueRepository: QueueRepository) {}

  async call(
    title: string,
    abbreviation: string,
    priority: number
  ): Promise<QueueModel> {
    if (typeof priority !== 'number') {
      throw customException('A prioridade deve ser númerica')
    }

    const queue = this.queueRepository.addQueue(title, abbreviation, priority)

    return queue
  }
}
