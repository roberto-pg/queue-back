import { OrderRepository } from '@src/data/protocols/order'
import { AddOrderUseCaseImpl } from '@src/data/usecases/order/add-order'
import { AddOrderUseCase } from '@src/domain/protocols/order'
import { InMemoryOrderRepository } from '@src/infra/repositories/in-memory-order-repository'

describe('Create new order', () => {
  let orderRepository: OrderRepository
  let sut: AddOrderUseCase
  const queueId = 'a8e4baae-d5b4-4478-a498-4294a90ba8cf'
  const position = 5
  const timestamp = '2022-03-21 18:37:30'
  const status = 'waiting'

  beforeAll(() => {
    orderRepository = new InMemoryOrderRepository()
    sut = new AddOrderUseCaseImpl(orderRepository)
  })

  it('should be able to create a new order', async () => {
    const order = await sut.add(queueId, position, timestamp, status)

    expect(order).toHaveProperty('id')
    expect(order.status).toBe('waiting')
  })
})
