import { OrderEntity } from '@src/domain/entities'

export class OrderViewModel {
  static map(entity: OrderEntity): OrderViewModel {
    return {
      id: entity.id,
      queueId: entity.queue_id,
      position: entity.position,
      timestamp: entity.timestamp.toISOString(),
      status: entity.status,
    }
  }

  static mapCollection(entities: OrderEntity[]): OrderViewModel[] {
    return entities.map((entity) => OrderViewModel.map(entity))
  }
}
