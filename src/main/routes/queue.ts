import { adaptRoute } from '@/main/adapters'
import { loadQueuesController } from '@/main/factories'
import { addQueueController } from '@/main/factories/add-queue-controller'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/create-queue', adaptRoute(addQueueController()))

  router.get('/queues', adaptRoute(loadQueuesController()))
}
