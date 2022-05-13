import { OrderRepository } from '@src/data/protocols/order'
import { OrderEntity } from '@src/domain/entities'
import { AddOrderUseCase } from '@src/domain/protocols/order'

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
