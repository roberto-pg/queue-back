import { OrderModel } from '@/data/models/order'
import { OrderRepository } from '@/data/protocols/order'
import { HttpService } from '@/infra/protocols'

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
        status
      }
    })

    return order
  }
}
