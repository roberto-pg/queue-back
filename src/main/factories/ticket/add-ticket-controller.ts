import { Controller } from '@src/presentation/protocols/controller'
import { PrismaServer } from '@src/infra/db/postgres'
import { TicketRepositoryImpl } from '@src/infra/repositories'
import { AddTicketUseCaseImpl } from '@src/data/usecases/ticket'
import { AddTicketController } from '@src/presentation/controllers/ticket'

export const addTicketController = (): Controller => {
  const prisma = new PrismaServer()
  const ticketRepository = new TicketRepositoryImpl(prisma)
  const ticketAdd = new AddTicketUseCaseImpl(ticketRepository)

  return new AddTicketController(ticketAdd)
}
