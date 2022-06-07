import { customException } from '@src/data/errors'
import { TicketModel } from '@src/data/models'
import { TicketRepository } from '@src/data/protocols/ticket'
import { UpdateTicketStatusUseCase } from '@src/domain/protocols/ticket'

export class UpdateTicketStatusUseCaseImpl
  implements UpdateTicketStatusUseCase
{
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(id: string, status: string): Promise<TicketModel> {
    if (
      status !== 'waiting' &&
      status !== 'called' &&
      status !== 'beingAttended' &&
      status !== 'notFound' &&
      status !== 'finished'
    ) {
      throw customException('Status inválido')
    }

    const ticket = await this.ticketRepository.updateTicketStatus(id, status)
    return ticket
  }
}
