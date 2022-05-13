import { OrderRepository } from '@src/data/protocols/order'
import { OrderEntity } from '@src/domain/entities'
import { LoadOrdersByQueueIdUseCase } from '@src/domain/protocols/order'
import { VerifyQueueId } from '@src/validation'
import { customException } from '@src/data/errors'

export class LoadOrdersByQueueIdUseCaseImpl
  implements LoadOrdersByQueueIdUseCase
{
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly validate: VerifyQueueId
  ) {}

  async load(queueId: string): Promise<OrderEntity[]> {
    const queue = await this.validate.verifyQueueId(queueId)

    if (!queue) {
      throw customException('A fila não existe')
    }

    const orders = await this.orderRepository.loadOrdersByQueueId(queueId)

    return orders
  }
}
