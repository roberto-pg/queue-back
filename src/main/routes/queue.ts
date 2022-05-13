import { adaptRoute } from '@src/main/adapters'
import {
  addQueueController,
  deleteQueueController,
  loadQueuesController,
} from '@src/main/factories/queue'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/create-queue', adaptRoute(addQueueController()))

  router.get('/queues', adaptRoute(loadQueuesController()))

  router.delete('/delete/:id', adaptRoute(deleteQueueController()))
}
