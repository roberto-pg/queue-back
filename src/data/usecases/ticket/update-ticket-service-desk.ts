import { TicketModel } from '@src/data/models'
import { TicketRepository } from '@src/data/protocols/ticket'
import { UpdateTicketServiceDeskUseCase } from '@src/domain/protocols/ticket'

export class UpdateTicketServiceDeskUseCaseImpl
  implements UpdateTicketServiceDeskUseCase
{
  constructor(private readonly ticketRepository: TicketRepository) {}

  async call(id: string, serviceDesk: number): Promise<TicketModel> {
    const ticket = await this.ticketRepository.updateTicketServiceDesk(
      id,
      serviceDesk
    )
    return ticket
  }
}
