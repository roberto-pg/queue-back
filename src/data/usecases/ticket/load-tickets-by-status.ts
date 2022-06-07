import { customException } from '@src/data/errors'
import { TicketModel } from '@src/data/models'
import { TicketRepository } from '@src/data/protocols/ticket'
import { LoadTicketsByStatusUseCase } from '@src/domain/protocols/ticket'

export class LoadTicketsByStatusUseCaseImpl
  implements LoadTicketsByStatusUseCase
{
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(status: string): Promise<TicketModel[]> {
    if (
      status !== 'waiting' &&
      status !== 'called' &&
      status !== 'beingAttended' &&
      status !== 'notFound' &&
      status !== 'finished'
    ) {
      throw customException('Status inválido')
    }

    const tickets = await this.ticketRepository.loadTicketsByStatus(status)
    return tickets
  }
}
