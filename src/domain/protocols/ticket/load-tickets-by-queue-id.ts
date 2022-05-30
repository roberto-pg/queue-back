import { TicketEntity } from '@src/domain/entities'

export interface LoadTicketsByQueueIdUseCase {
  call: (queueId: string) => Promise<TicketEntity[]>
}
