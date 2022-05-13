import { QueueRepository } from '@src/data/protocols/queue'
import { DeleteQueueUseCase } from '@src/domain/protocols/queue'

export class DeleteQueueUseCaseImpl implements DeleteQueueUseCase {
  constructor(private readonly queueRepository: QueueRepository) {}

  async delete(id: string): Promise<string> {
    const result = await this.queueRepository.deleteQueueById(id)
    return result
  }
}
