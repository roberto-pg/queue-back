import { customException } from '@src/data/errors'
import { QueueModel } from '@src/data/models'
import { QueueRepository } from '@src/data/protocols/queue'
import { LoadQueueByTitleUseCase } from '@src/domain/protocols/queue'
import { VerifyQueueTitle } from '@src/validation'

export class LoadQueueByTitleUseCaseImpl implements LoadQueueByTitleUseCase {
  constructor(
    private readonly queueRepository: QueueRepository,
    private readonly validate: VerifyQueueTitle
  ) {}

  async call(title: string): Promise<QueueModel | null> {
    const queueTitle = await this.validate.verifyQueueTitle(title)

    if (!queueTitle) {
      throw customException('A fila não existe')
    }

    const queue = await this.queueRepository.loadByTitle(title)
    return queue
  }
}
