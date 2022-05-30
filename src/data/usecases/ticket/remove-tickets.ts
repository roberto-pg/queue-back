import { TicketRepository } from '@src/data/protocols/ticket'
import { RemoveTicketsUseCase } from '@src/domain/protocols/ticket'

export class RemoveTicketsUseCaseImpl implements RemoveTicketsUseCase {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(): Promise<string> {
    const result = await this.ticketRepository.removeTickets()
    return result
  }
}
