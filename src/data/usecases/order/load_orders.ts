import { OrderRepository } from '@src/data/protocols/order'
import { OrderEntity } from '@src/domain/entities'
import { LoadOrdersUseCase } from '@src/domain/protocols/order'

export class LoadOrdersUseCaseImpl implements LoadOrdersUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async load(): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.loadOrders()

    return orders
  }
}
