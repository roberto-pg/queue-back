import { QueueRepository } from '@src/data/protocols/queue'
import { DeleteQueueUseCaseImpl } from '@src/data/usecases/queue/delete-queue'
import { DeleteQueueUseCase } from '@src/domain/protocols/queue'
import { InMemoryQueueRepository } from '@src/infra/repositories'

describe('Delete queue', () => {
  let queueRepository: QueueRepository
  let sut: DeleteQueueUseCase

  beforeAll(() => {
    queueRepository = new InMemoryQueueRepository()
    sut = new DeleteQueueUseCaseImpl(queueRepository)
  })

  it('should be able to delete a queue by id', async () => {
    const result = await sut.delete('af19974c-09af-41f3-ae0a-cb2a14c5d102')

    expect(result).toBe('af19974c-09af-41f3-ae0a-cb2a14c5d102')
  })
})
