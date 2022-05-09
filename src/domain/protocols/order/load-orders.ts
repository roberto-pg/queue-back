import { OrderEntity } from '@/domain/entities'

export interface LoadOrdersUseCase {
  load: () => Promise<OrderEntity[]>
}
