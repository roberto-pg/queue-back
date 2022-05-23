import { OrderRepository } from '@src/data/protocols/order'
import { customException } from '@src/data/errors'
import { OrderModel } from '@src/data/models'
import { v4 as uuid } from 'uuid'

export class InMemoryOrderRepository implements OrderRepository {
  private orders: OrderModel[] = []

  async addOrder(
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ): Promise<OrderModel> {
    const order: OrderModel = {
      queue_id: queueId,
      position,
      timestamp: new Date(timestamp),
      status,
    }

    Object.assign(order, {
      id: uuid(),
    })

    this.orders.push(order)

    return this.orders[0]
  }

  async loadOrders(): Promise<OrderModel[]> {
    throw customException('unimplemented')
  }

  async loadOrdersByQueueId(queueId: string): Promise<OrderModel[]> {
    throw customException('unimplemented')
  }
}
