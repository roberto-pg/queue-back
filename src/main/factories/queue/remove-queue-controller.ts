import { RemoveQueueUseCaseImpl } from '@src/data/usecases/queue'
import { PrismaServer } from '@src/infra/db/postgres'
import { QueueRepositoryImpl } from '@src/infra/repositories'
import { RemoveQueueController } from '@src/presentation/controllers/queue'
import { Controller } from '@src/presentation/protocols/controller'

export const removeQueueController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const removeQueueUseCase = new RemoveQueueUseCaseImpl(queueRepository)

  return new RemoveQueueController(removeQueueUseCase)
}
