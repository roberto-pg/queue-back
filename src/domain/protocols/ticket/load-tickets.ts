import { TicketEntity } from '@src/domain/entities'

export interface LoadTicketsUseCase {
  load: () => Promise<TicketEntity[]>
}
