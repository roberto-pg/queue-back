import { TicketRepository } from '@src/data/protocols/ticket'
import { TicketEntity } from '@src/domain/entities'
import { LoadTicketsUseCase } from '@src/domain/protocols/ticket'

export class LoadTicketsUseCaseImpl implements LoadTicketsUseCase {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(): Promise<TicketEntity[]> {
    const tickets = await this.ticketRepository.loadTickets()

    return tickets
  }
}
