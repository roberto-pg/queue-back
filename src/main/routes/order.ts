import { adaptRoute } from '@/main/adapters'
import {
  addOrderController,
  loadOrdersByQueueIdController,
  loadOrdersControllers
} from '@/main/factories/order'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/create-order', adaptRoute(addOrderController()))

  router.get('/orders', adaptRoute(loadOrdersControllers()))

  router.get(
    '/orders-by-queue-id/:queueId',
    adaptRoute(loadOrdersByQueueIdController())
  )
}
