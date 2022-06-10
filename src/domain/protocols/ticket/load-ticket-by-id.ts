import { TicketEntity } from '@src/domain/entities'

export interface LoadTicketByIdUseCase {
  call: (id: string) => Promise<TicketEntity | null>
}
