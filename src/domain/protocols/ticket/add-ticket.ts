import { TicketEntity } from '@src/domain/entities'

export interface AddTicketUseCase {
  call: (
    queueId: string,
    position: number,
    timestamp: string,
    status: string,
    queueAbb: string
  ) => Promise<TicketEntity>
}
