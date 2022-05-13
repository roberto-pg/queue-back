import { AddQueueUseCaseImpl } from '@src/data/usecases/queue'
import { PrismaServer } from '@src/infra/db/postgres'
import { QueueRepositoryImpl } from '@src/infra/repositories'
import { AddQueueController } from '@src/presentation/controllers/queue'
import { Controller } from '@src/presentation/protocols/controller'

export const addQueueController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const queueAdd = new AddQueueUseCaseImpl(queueRepository)

  return new AddQueueController(queueAdd)
}
