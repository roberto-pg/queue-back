import { PrismaServer } from '@src/infra/db/postgres'
import { Controller } from '@src/presentation/protocols/controller'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { UpdateTicketServiceDeskUseCaseImpl } from '@src/data/usecases/ticket'
import { UpdateTicketServiceDeskController } from '@src/presentation/controllers/ticket'

export const updateTicketServiceDeskController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const updateServiceDeskUseCase = new UpdateTicketServiceDeskUseCaseImpl(
    ticketRepository
  )

  return new UpdateTicketServiceDeskController(updateServiceDeskUseCase)
}
