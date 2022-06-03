import { TicketEntity } from '@src/domain/entities'

export interface UpdateTicketServiceDeskUseCase {
  call: (id: string, serviceDesk: number) => Promise<TicketEntity>
}
