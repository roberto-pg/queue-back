import { LoadQueuesUseCaseImpl } from '@src/data/usecases/queue'
import { PrismaServer } from '@src/infra/db/postgres'
import { QueueRepositoryImpl } from '@src/infra/repositories'
import { LoadQueuesController } from '@src/presentation/controllers/queue'
import { Controller } from '@src/presentation/protocols/controller'

export const loadQueuesController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const loadQueuesUseCase = new LoadQueuesUseCaseImpl(queueRepository)

  return new LoadQueuesController(loadQueuesUseCase)
}
