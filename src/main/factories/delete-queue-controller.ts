import { DeleteQueueUseCaseImpl } from '@/data/usecases/queue'
import { PrismaServer } from '@/infra/db/postgres'
import { QueueRepositoryImpl } from '@/infra/repositories'
import { Controller } from '@/presentation/protocols'
import { DeleteQueueController } from '../../presentation/controllers/delete-queue'

export const deleteQueueController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const deleteQueueUseCase = new DeleteQueueUseCaseImpl(queueRepository)

  return new DeleteQueueController(deleteQueueUseCase)
}
