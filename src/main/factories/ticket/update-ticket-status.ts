import { UpdateTicketStatusUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { UpdateTicketStatusController } from '@src/presentation/controllers/ticket'
import { Controller } from '@src/presentation/protocols/controller'

export const updateTicketStatusController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const updateTicketStatus = new UpdateTicketStatusUseCaseImpl(ticketRepository)

  return new UpdateTicketStatusController(updateTicketStatus)
}
