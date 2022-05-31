import { customException } from '@src/data/errors'
import { TicketModel } from '@src/data/models'
import { TicketRepository } from '@src/data/protocols/ticket'
import { LoadTicketsByStatusUseCase } from '@src/domain/protocols/ticket'
import { VerifyQueueId } from '@src/validation'

export class LoadTicketsByStatusUseCaseImpl
  implements LoadTicketsByStatusUseCase
{
  constructor(
    private readonly ticketRepository: TicketRepository,
    private readonly validate: VerifyQueueId
  ) {}

  async call(queueId: string, status: string): Promise<TicketModel[]> {
    const queue = await this.validate.verifyQueueId(queueId)

    if (!queue) {
      throw customException('A fila não existe')
    }

    if (
      status !== 'waiting' &&
      status !== 'attending' &&
      status !== 'notFound' &&
      status !== 'finished'
    ) {
      throw customException('Status inválido')
    }

    const tickets = await this.ticketRepository.loadTicketsByStatus(
      queueId,
      status
    )
    return tickets
  }
}
