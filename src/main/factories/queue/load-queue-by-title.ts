import { LoadQueueByTitleUseCaseImpl } from '@src/data/usecases/queue'
import { PrismaServer } from '@src/infra/db/postgres'
import { QueueRepositoryImpl } from '@src/infra/repositories'
import { LoadQueueByTitleController } from '@src/presentation/controllers/queue'
import { Controller } from '@src/presentation/protocols/controller'
import { VerifyQueueTitle } from '@src/validation'

export const loadQueueByTitleController = (): Controller => {
  const prisma = new PrismaServer()
  const validate = new VerifyQueueTitle(prisma)
  const queueRepository = new QueueRepositoryImpl(prisma)
  const loadQueueByTitleUseCase = new LoadQueueByTitleUseCaseImpl(
    queueRepository,
    validate
  )

  return new LoadQueueByTitleController(loadQueueByTitleUseCase)
}
