import { TicketEntity } from '@src/domain/entities'

export interface LoadTicketsByStatusUseCase {
  call: (queueId: string, status: string) => Promise<TicketEntity[]>
}
