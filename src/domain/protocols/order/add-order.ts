import { OrderEntity } from '@src/domain/entities'

export interface AddOrderUseCase {
  add: (
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ) => Promise<OrderEntity>
}
