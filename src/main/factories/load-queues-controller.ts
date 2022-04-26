import { LoadQueuesUseCaseImpl } from '@/data/usecases/queue'
import { PrismaServer } from '@/infra/db/postgres'
import { QueueRepositoryImpl } from '@/infra/repositories'
import { LoadQueuesController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols/controller'

export const loadQueuesController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const loadQueuesUseCase = new LoadQueuesUseCaseImpl(queueRepository)

  return new LoadQueuesController(loadQueuesUseCase)
}
