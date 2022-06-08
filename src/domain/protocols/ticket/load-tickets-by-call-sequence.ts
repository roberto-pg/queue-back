import { TicketEntity } from '@src/domain/entities'

export interface LoadTicketsByCallSequenceUseCase {
  call: () => Promise<TicketEntity[]>
}
