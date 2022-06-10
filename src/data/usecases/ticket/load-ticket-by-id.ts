import { TicketModel } from '@src/data/models'
import { TicketRepository } from '@src/data/protocols/ticket'
import { LoadTicketByIdUseCase } from '@src/domain/protocols/ticket'
import { VerifyTicketId } from '@src/validation'
import { customException } from '@src/data/errors'

export class LoadTicketByIdUseCaseImpl implements LoadTicketByIdUseCase {
  constructor(
    private readonly ticketRepository: TicketRepository,
    private readonly validate: VerifyTicketId
  ) {}

  async call(id: string): Promise<TicketModel | null> {
    const ticketId = await this.validate.verifyTicketId(id)

    if (!ticketId) {
      throw customException('O ticket não existe')
    }

    const ticket = await this.ticketRepository.loadTicketById(id)
    return ticket
  }
}
