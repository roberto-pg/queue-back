import { TicketRepository } from '@src/data/protocols/ticket'
import { TicketEntity } from '@src/domain/entities'
import { AddTicketUseCase } from '@src/domain/protocols/ticket'

export class AddTicketUseCaseImpl implements AddTicketUseCase {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async add(
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ): Promise<TicketEntity> {
    const ticket = await this.ticketRepository.addTicket(
      queueId,
      position,
      timestamp,
      status
    )

    return ticket
  }
}
