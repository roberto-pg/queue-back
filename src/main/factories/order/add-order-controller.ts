import { Controller } from '@/presentation/protocols/controller'
import { PrismaServer } from '@/infra/db/postgres'
import { OrderRepositoryImpl } from '@/infra/repositories'
import { AddOrderUseCaseImpl } from '@/data/usecases/order'
import { AddOrderController } from '@/presentation/controllers/order'

export const addOrderController = (): Controller => {
  const prisma = new PrismaServer()
  const orderRepository = new OrderRepositoryImpl(prisma)
  const orderAdd = new AddOrderUseCaseImpl(orderRepository)

  return new AddOrderController(orderAdd)
}
