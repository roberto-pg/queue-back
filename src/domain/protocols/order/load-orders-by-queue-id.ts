import { OrderEntity } from '@src/domain/entities'

export interface LoadOrdersByQueueIdUseCase {
  load: (queueId: string) => Promise<OrderEntity[]>
}
