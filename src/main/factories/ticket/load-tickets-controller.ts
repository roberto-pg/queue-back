import { LoadTicketsUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import { TicketRepositoryImpl } from '@src/infra/repositories'
import { LoadTicketsController } from '@src/presentation/controllers/ticket'
import { Controller } from '@src/presentation/protocols/controller'

export const loadTicketsControllers = (): Controller => {
  const prisma = new PrismaServer()
  const ticketRepository = new TicketRepositoryImpl(prisma)
  const loadTicketsUseCase = new LoadTicketsUseCaseImpl(ticketRepository)

  return new LoadTicketsController(loadTicketsUseCase)
}
