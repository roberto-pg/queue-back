import { LoadTicketByIdUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { LoadTicketByIdController } from '@src/presentation/controllers/ticket'
import { Controller } from '@src/presentation/protocols/controller'
import { VerifyTicketId } from '@src/validation'

export const loadTicketByIdController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const validate = new VerifyTicketId(prisma)
  const loadTicketByIdUseCase = new LoadTicketByIdUseCaseImpl(
    ticketRepository,
    validate
  )

  return new LoadTicketByIdController(loadTicketByIdUseCase)
}
