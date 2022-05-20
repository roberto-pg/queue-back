import { QueueRepository } from '@src/data/protocols/queue'
import { DeleteQueueUseCaseImpl } from '@src/data/usecases/queue/delete-queue'
import { DeleteQueueUseCase } from '@src/domain/protocols/queue'
import { QueueRepositoryInMemory } from '@src/infra/repositories'

describe('Delete queue', () => {
  let queueRepository: QueueRepository
  let deleteQueuesUseCase: DeleteQueueUseCase

  beforeAll(() => {
    queueRepository = new QueueRepositoryInMemory()
    deleteQueuesUseCase = new DeleteQueueUseCaseImpl(queueRepository)
  })

  it('should be able to delete a queue by id', async () => {
    const result = await deleteQueuesUseCase.delete(
      'af19974c-09af-41f3-ae0a-cb2a14c5d102'
    )

    expect(result).toBe('af19974c-09af-41f3-ae0a-cb2a14c5d102')
  })
})
