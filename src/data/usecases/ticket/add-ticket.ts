import { TicketRepository } from '@src/data/protocols/ticket'
import { AddTicketUseCase } from '@src/domain/protocols/ticket'
import { customException } from '@src/data/errors'
import { TicketModel } from '@src/data/models'

export class AddTicketUseCaseImpl implements AddTicketUseCase {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ): Promise<TicketModel> {
    if (
      status !== 'waiting' &&
      status !== 'called' &&
      status !== 'attending' &&
      status !== 'notFound' &&
      status !== 'finished'
    ) {
      throw customException('Status inválido')
    }

    const ticket = await this.ticketRepository.addTicket(
      queueId,
      position,
      timestamp,
      status
    )

    return ticket
  }
}
