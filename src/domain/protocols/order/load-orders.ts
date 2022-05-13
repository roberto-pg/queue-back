import { OrderEntity } from '@src/domain/entities'

export interface LoadOrdersUseCase {
  load: () => Promise<OrderEntity[]>
}
