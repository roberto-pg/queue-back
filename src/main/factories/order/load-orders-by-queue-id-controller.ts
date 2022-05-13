import { LoadOrdersByQueueIdUseCaseImpl } from '@src/data/usecases/order'
import { PrismaServer } from '@src/infra/db/postgres'
import { OrderRepositoryImpl } from '@src/infra/repositories'
import { LoadOrdersByQueueIdController } from '@src/presentation/controllers/order'
import { Controller } from '@src/presentation/protocols/controller'
import { VerifyQueueId } from '@src/validation'

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
