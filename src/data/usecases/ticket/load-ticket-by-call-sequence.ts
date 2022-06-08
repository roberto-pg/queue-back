import { TicketRepository } from '@src/data/protocols/ticket'
import { LoadTicketsByCallSequenceUseCase } from '@src/domain/protocols/ticket'
import { TicketModel } from '@src/data/models'

export class LoadTicketsByCallSequenceUseCaseImpl
  implements LoadTicketsByCallSequenceUseCase
{
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(): Promise<TicketModel[]> {
    const tickets = await this.ticketRepository.loadTicketsByCallSequence()

    return tickets
  }
}
