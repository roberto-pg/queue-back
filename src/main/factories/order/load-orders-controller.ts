import { LoadOrdersUseCaseImpl } from '@src/data/usecases/order'
import { PrismaServer } from '@src/infra/db/postgres'
import { OrderRepositoryImpl } from '@src/infra/repositories'
import { LoadOrdersController } from '@src/presentation/controllers/order'
import { Controller } from '@src/presentation/protocols/controller'

export const loadOrdersControllers = (): Controller => {
  const prisma = new PrismaServer()
  const orderRepository = new OrderRepositoryImpl(prisma)
  const loadOrdersUseCase = new LoadOrdersUseCaseImpl(orderRepository)

  return new LoadOrdersController(loadOrdersUseCase)
}
