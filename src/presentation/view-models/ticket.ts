import { TicketEntity } from '@src/domain/entities'

export class TicketViewModel {
  static map(entity: TicketEntity): TicketViewModel {
    return {
      id: entity.id,
      position: entity.position,
      timestamp: entity.timestamp.toISOString(),
      status: entity.status,
      queueId: entity.queue_id,
      queueAbb: entity.queue_abb,
      serviceDesk: entity.service_desk,
    }
  }

  static mapCollection(entities: TicketEntity[]): TicketViewModel[] {
    return entities.map((entity) => TicketViewModel.map(entity))
  }
}
