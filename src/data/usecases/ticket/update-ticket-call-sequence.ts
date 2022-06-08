import { TicketModel } from '@src/data/models'
import { TicketRepository } from '@src/data/protocols/ticket'
import { UpdateTicketCallSequenceUseCase } from '@src/domain/protocols/ticket'

export class UpdateTicketCallSequenceUseCaseImpl
  implements UpdateTicketCallSequenceUseCase
{
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(id: string, callSequence: number): Promise<TicketModel> {
    const ticket = await this.ticketRepository.updateTicketCallSequence(
      id,
      callSequence
    )
    return ticket
  }
}
