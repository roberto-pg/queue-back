import { OrderEntity } from '../../entities/order'
export interface AddOrderUseCase {
  add: (
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ) => Promise<OrderEntity>
}
