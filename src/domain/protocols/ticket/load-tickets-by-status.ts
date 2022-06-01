import { TicketEntity } from '@src/domain/entities'

export interface LoadTicketsByStatusUseCase {
  call: (status: string) => Promise<TicketEntity[]>
}
