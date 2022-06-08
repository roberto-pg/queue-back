import { PrismaServer } from '@src/infra/db/postgres'
import { Controller } from '@src/presentation/protocols/controller'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { UpdateTicketCallSequenceUseCaseImpl } from '@src/data/usecases/ticket'
import { UpdateTicketCallSequenceController } from '@src/presentation/controllers/ticket'

export const updateTicketCallSequenceController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const updateCallSequenceUseCase = new UpdateTicketCallSequenceUseCaseImpl(
    ticketRepository
  )

  return new UpdateTicketCallSequenceController(updateCallSequenceUseCase)
}
