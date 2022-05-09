import { LoadOrdersUseCaseImpl } from '@/data/usecases/order'
import { PrismaServer } from '@/infra/db/postgres'
import { OrderRepositoryImpl } from '@/infra/repositories'
import { LoadOrdersController } from '@/presentation/controllers/order'
import { Controller } from '@/presentation/protocols/controller'

export const loadOrdersControllers = (): Controller => {
  const prisma = new PrismaServer()
  const orderRepository = new OrderRepositoryImpl(prisma)
  const loadOrdersUseCase = new LoadOrdersUseCaseImpl(orderRepository)

  return new LoadOrdersController(loadOrdersUseCase)
}
