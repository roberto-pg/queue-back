import { TicketModel } from '@src/data/models'
import { TicketRepository } from '@src/data/protocols/ticket'
import { LoadTicketsUseCase } from '@src/domain/protocols/ticket'

export class LoadTicketsUseCaseImpl implements LoadTicketsUseCase {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(): Promise<TicketModel[]> {
    const tickets = await this.ticketRepository.loadTickets()

    return tickets
  }
}
