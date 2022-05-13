import { OrderModel } from '@src/data/models/order'
import { OrderRepository } from '@src/data/protocols/order'
import { OrderEntity } from '@src/domain/entities'
import { HttpService } from '@src/infra/protocols'

export class OrderRepositoryImpl implements OrderRepository {
  constructor(private readonly prismaServer: HttpService) {}

  async addOrder(
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ): Promise<OrderModel> {
    const order = await this.prismaServer.connectPrisma().order.create({
      data: {
        queue_id: queueId,
        position,
        timestamp: new Date(timestamp),
        status,
      },
    })

    return order
  }

  async loadOrders(): Promise<OrderEntity[]> {
    const orders = await this.prismaServer.connectPrisma().order.findMany()

    return orders
  }

  async loadOrdersByQueueId(queueId: string): Promise<OrderEntity[]> {
    const orders = await this.prismaServer.connectPrisma().order.findMany({
      where: {
        queue_id: queueId,
      },
    })

    return orders
  }
}
