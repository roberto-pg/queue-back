import { QueueRepository } from '@src/data/protocols/queue'
import { LoadQueuesUseCaseImpl } from '@src/data/usecases/queue/load-queus'
import { LoadQueuesUseCase } from '@src/domain/protocols/queue'
import { QueueRepositoryInMemory } from '@src/infra/repositories'

describe('Load queues', () => {
  let queueRepository: QueueRepository
  let loadQueuesUseCase: LoadQueuesUseCase

  beforeAll(() => {
    queueRepository = new QueueRepositoryInMemory()
    loadQueuesUseCase = new LoadQueuesUseCaseImpl(queueRepository)
  })

  it('should be able to return a list of queues', async () => {
    const queues = await loadQueuesUseCase.load()

    expect(queues.length).toBe(1)
    expect(queues).not.toEqual([{}])
  })
})
