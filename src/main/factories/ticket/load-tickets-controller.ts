import { LoadTicketsUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { LoadTicketsController } from '@src/presentation/controllers/ticket'
import { Controller } from '@src/presentation/protocols/controller'

export const loadTicketsControllers = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const loadTicketsUseCase = new LoadTicketsUseCaseImpl(ticketRepository)

  return new LoadTicketsController(loadTicketsUseCase)
}
