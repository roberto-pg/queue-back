import { QueueRepository } from '@src/data/protocols/queue'
import { AddQueueUseCase } from '@src/domain/protocols/queue'
import { InMemoryQueueRepository } from '@src/infra/repositories'
import { AddQueueUseCaseImpl } from './add-queue'

describe('Create new queue', () => {
  let queueRepository: QueueRepository
  let sut: AddQueueUseCase
  const title = 'Cadeirante'
  const abbreviation = 'CD'
  const priority = 2

  beforeAll(() => {
    queueRepository = new InMemoryQueueRepository()
    sut = new AddQueueUseCaseImpl(queueRepository)
  })

  it('priority must be of numeric type', () => {
    expect(typeof priority === 'number').toBe(true)
  })

  it('should be able to create a new queue', async () => {
    const queue = await sut.call(title, abbreviation, priority)

    expect(queue).toHaveProperty('id')
    expect(queue.title).toBe('Cadeirante')
  })
})
