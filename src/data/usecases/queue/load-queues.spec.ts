import { QueueRepository } from '@src/data/protocols/queue'
import { LoadQueuesUseCaseImpl } from '@src/data/usecases/queue/load-queus'
import { LoadQueuesUseCase } from '@src/domain/protocols/queue'
import { InMemoryQueueRepository } from '@src/infra/repositories'

describe('Load queues', () => {
  let queueRepository: QueueRepository
  let sut: LoadQueuesUseCase

  beforeAll(() => {
    queueRepository = new InMemoryQueueRepository()
    sut = new LoadQueuesUseCaseImpl(queueRepository)
  })

  it('should be able to return a list of queues', async () => {
    const queues = await sut.call()

    expect(queues.length).toBe(1)
    expect(queues).not.toEqual([{}])
  })
})
