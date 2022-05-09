import { OrderModel } from '@/data/models/order'

export interface OrderRepository {
  addOrder: (
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ) => Promise<OrderModel>
  loadOrders: () => Promise<OrderModel[]>
  loadOrdersByQueueId: (queueId: string) => Promise<OrderModel[]>
}
