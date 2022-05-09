import { OrderRepository } from '@/data/protocols/order'
import { OrderEntity } from '@/domain/entities'
import { LoadOrdersUseCase } from '@/domain/protocols/order'

export class LoadOrdersUseCaseImpl implements LoadOrdersUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async load(): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.loadOrders()

    return orders
  }
}
