import { Controller } from '@src/presentation/protocols/controller'
import { PrismaServer } from '@src/infra/db/postgres'
import { OrderRepositoryImpl } from '@src/infra/repositories'
import { AddOrderUseCaseImpl } from '@src/data/usecases/order'
import { AddOrderController } from '@src/presentation/controllers/order'

export const addOrderController = (): Controller => {
  const prisma = new PrismaServer()
  const orderRepository = new OrderRepositoryImpl(prisma)
  const orderAdd = new AddOrderUseCaseImpl(orderRepository)

  return new AddOrderController(orderAdd)
}
