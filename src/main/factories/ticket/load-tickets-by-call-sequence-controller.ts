import { LoadTicketsByCallSequenceUseCaseImpl } from '@src/data/usecases/ticket'
import { PrismaServer } from '@src/infra/db/postgres'
import {
  QueueRepositoryImpl,
  TicketRepositoryImpl,
} from '@src/infra/repositories'
import { LoadTicketsByCallSequenceController } from '@src/presentation/controllers/ticket'
import { Controller } from '@src/presentation/protocols/controller'

export const loadTicketsByCallSequenceController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const ticketRepository = new TicketRepositoryImpl(prisma, queueRepository)
  const loadTicketsByCallSequenceUseCase =
    new LoadTicketsByCallSequenceUseCaseImpl(ticketRepository)

  return new LoadTicketsByCallSequenceController(
    loadTicketsByCallSequenceUseCase
  )
}
