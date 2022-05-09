import { AddQueueUseCaseImpl } from '@/data/usecases/queue'
import { PrismaServer } from '@/infra/db/postgres'
import { QueueRepositoryImpl } from '@/infra/repositories'
import { AddQueueController } from '@/presentation/controllers/queue'
import { Controller } from '@/presentation/protocols/controller'

export const addQueueController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const queueAdd = new AddQueueUseCaseImpl(queueRepository)

  return new AddQueueController(queueAdd)
}
