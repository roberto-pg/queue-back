import { RemoveTicketsUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { RemoveTicketsController } from '@src/presentation/controllers/ticket/remove-tickets'
import { Controller } from '@src/presentation/protocols/controller'

export const removeTicketsController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const removeTicketsUseCase = new RemoveTicketsUseCaseImpl(ticketRepository)

  return new RemoveTicketsController(removeTicketsUseCase)
}
