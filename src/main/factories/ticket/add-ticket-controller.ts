import { Controller } from '@src/presentation/protocols/controller'
import { PrismaServer } from '@src/infra/db/postgres'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { AddTicketUseCaseImpl } from '@src/data/usecases/ticket'
import { AddTicketController } from '@src/presentation/controllers/ticket'

export const addTicketController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const ticketAdd = new AddTicketUseCaseImpl(ticketRepository)

  return new AddTicketController(ticketAdd)
}
