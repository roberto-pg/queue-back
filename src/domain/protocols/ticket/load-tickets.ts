import { TicketEntity } from '@src/domain/entities'

export interface LoadTicketsUseCase {
  call: () => Promise<TicketEntity[]>
}
