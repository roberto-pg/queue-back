import { TicketEntity } from '@src/domain/entities'

export class TicketViewModel {
  static map(entity: TicketEntity): TicketViewModel {
    return {
      id: entity.id,
      queueId: entity.queue_id,
      position: entity.position,
      timestamp: entity.timestamp.toISOString(),
      status: entity.status,
    }
  }

  static mapCollection(entities: TicketEntity[]): TicketViewModel[] {
    return entities.map((entity) => TicketViewModel.map(entity))
  }
}
