import { TicketEntity } from '@src/domain/entities'

export interface AddTicketUseCase {
  add: (
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ) => Promise<TicketEntity>
}
