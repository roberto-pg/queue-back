import { LoadTicketsByQueueIdUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import { TicketRepositoryImpl } from '@src/infra/repositories'
import { LoadTicketsByQueueIdController } from '@src/presentation/controllers/ticket'
import { Controller } from '@src/presentation/protocols/controller'
import { VerifyQueueId } from '@src/validation'

export const loadTicketsByQueueIdController = (): Controller => {
  const prisma = new PrismaServer()
  const validation = new VerifyQueueId(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma)
  const ticketsByQueueIdUseCase = new LoadTicketsByQueueIdUseCaseImpl(
    ticketRepository,
    validation
  )

  return new LoadTicketsByQueueIdController(ticketsByQueueIdUseCase)
}
