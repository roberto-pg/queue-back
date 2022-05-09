import { OrderRepository } from '@/data/protocols/order'
import { OrderEntity } from '@/domain/entities'
import { LoadOrdersByQueueIdUseCase } from '@/domain/protocols/order'
import { VerifyQueueId } from '@/validation'
import { customException } from '@/data/errors'

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
