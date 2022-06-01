import { LoadTicketsByStatusUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { LoadTicketsByStatusController } from '@src/presentation/controllers/ticket'
import { Controller } from '@src/presentation/protocols/controller'

export const loadTicketsByStatusController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const loadTicketsByStatusUseCase = new LoadTicketsByStatusUseCaseImpl(
    ticketRepository
  )

  return new LoadTicketsByStatusController(loadTicketsByStatusUseCase)
}
