import { LoadOrdersByQueueIdUseCaseImpl } from '@/data/usecases/order'
import { PrismaServer } from '@/infra/db/postgres'
import { OrderRepositoryImpl } from '@/infra/repositories'
import { LoadOrdersByQueueIdController } from '@/presentation/controllers/order'
import { Controller } from '@/presentation/protocols/controller'
import { VerifyQueueId } from '@/validation'

export const loadOrdersByQueueIdController = (): Controller => {
  const prisma = new PrismaServer()
  const validation = new VerifyQueueId(prisma)
  const orderRepository = new OrderRepositoryImpl(prisma)
  const ordersByQueueIdUseCase = new LoadOrdersByQueueIdUseCaseImpl(
    orderRepository,
    validation
  )

  return new LoadOrdersByQueueIdController(ordersByQueueIdUseCase)
}
