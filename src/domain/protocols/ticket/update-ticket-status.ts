import { TicketEntity } from '@src/domain/entities'

export interface UpdateTicketStatusUseCase {
  call: (id: string, status: string) => Promise<TicketEntity>
}
