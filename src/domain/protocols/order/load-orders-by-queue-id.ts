import { OrderEntity } from '@/domain/entities'

export interface LoadOrdersByQueueIdUseCase {
  load: (queueId: string) => Promise<OrderEntity[]>
}
