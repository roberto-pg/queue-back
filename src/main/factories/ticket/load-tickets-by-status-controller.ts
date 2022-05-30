import { LoadTicketsByStatusUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import { TicketRepositoryImpl } from '@src/infra/repositories'
import { LoadTicketsByStatusController } from '@src/presentation/controllers/ticket'
import { Controller } from '@src/presentation/protocols/controller'
import { VerifyQueueId } from '@src/validation'

export const loadTicketsByStatusController = (): Controller => {
  const prisma = new PrismaServer()
  const validation = new VerifyQueueId(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma)
  const loadTicketsByStatusUseCase = new LoadTicketsByStatusUseCaseImpl(
    ticketRepository,
    validation
  )

  return new LoadTicketsByStatusController(loadTicketsByStatusUseCase)
}
