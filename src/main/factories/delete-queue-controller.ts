import { DeleteQueueUseCaseImpl } from '@/data/usecases/queue'
import { PrismaServer } from '@/infra/db/postgres'
import { QueueRepositoryImpl } from '@/infra/repositories'
import { DeleteQueueController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols/controller'

export const deleteQueueController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const deleteQueueUseCase = new DeleteQueueUseCaseImpl(queueRepository)

  return new DeleteQueueController(deleteQueueUseCase)
}
