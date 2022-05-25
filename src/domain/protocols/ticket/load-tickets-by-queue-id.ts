import { TicketEntity } from '@src/domain/entities'

export interface LoadTicketsByQueueIdUseCase {
  load: (queueId: string) => Promise<TicketEntity[]>
}
