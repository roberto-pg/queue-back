import { TicketRepository } from '@src/data/protocols/ticket'
import { TicketEntity } from '@src/domain/entities'
import { LoadTicketsByQueueIdUseCase } from '@src/domain/protocols/ticket'
import { VerifyQueueId } from '@src/validation'
import { customException } from '@src/data/errors'

export class LoadTicketsByQueueIdUseCaseImpl
  implements LoadTicketsByQueueIdUseCase
{
  constructor(
    private readonly ticketRepository: TicketRepository,
    private readonly validate: VerifyQueueId
  ) {}

  async load(queueId: string): Promise<TicketEntity[]> {
    const queue = await this.validate.verifyQueueId(queueId)

    if (!queue) {
      throw customException('A fila não existe')
    }

    const tickets = await this.ticketRepository.loadTicketsByQueueId(queueId)

    return tickets
  }
}
