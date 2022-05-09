import { OrderRepository } from '@/data/protocols/order'
import { OrderEntity } from '@/domain/entities'
import { AddOrderUseCase } from '@/domain/protocols/order'

export class AddOrderUseCaseImpl implements AddOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async add(
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ): Promise<OrderEntity> {
    const order = await this.orderRepository.addOrder(
      queueId,
      position,
      timestamp,
      status
    )

    return order
  }
}
