import { adaptRoute } from '@/main/adapters'
import { addOrderController } from '@/main/factories/order'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/create-order', adaptRoute(addOrderController()))
}
