import { DeleteQueueUseCaseImpl } from '@src/data/usecases/queue'
import { PrismaServer } from '@src/infra/db/postgres'
import { QueueRepositoryImpl } from '@src/infra/repositories'
import { DeleteQueueController } from '@src/presentation/controllers/queue'
import { Controller } from '@src/presentation/protocols/controller'

export const deleteQueueController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const deleteQueueUseCase = new DeleteQueueUseCaseImpl(queueRepository)

  return new DeleteQueueController(deleteQueueUseCase)
}
