import { TicketEntity } from '@src/domain/entities'

export interface UpdateTicketCallSequenceUseCase {
  call: (id: string, callSequence: number) => Promise<TicketEntity>
}
