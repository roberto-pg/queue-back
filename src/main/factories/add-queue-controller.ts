import { AddQueueUseCaseImpl } from '@/data/usecases/queue'
import { PrismaServer } from '@/infra/db/postgres'
import { QueueRepositoryImpl } from '@/infra/repositories/queue-repository'
import { AddQueueController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const addQueueController = (): Controller => {
  const prisma = new PrismaServer()
  const queueRepository = new QueueRepositoryImpl(prisma)
  const queueAdd = new AddQueueUseCaseImpl(queueRepository)

  return new AddQueueController(queueAdd)
}
