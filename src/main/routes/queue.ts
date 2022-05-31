import { adaptRoute } from '@src/main/adapters'
import {
  addQueueController,
  removeQueueController,
  loadQueuesController,
  loadQueueByTitleController,
} from '@src/main/factories/queue'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/create-queue', adaptRoute(addQueueController()))

  router.get('/queues', adaptRoute(loadQueuesController()))

  router.get('/queue-by-title/:title', adaptRoute(loadQueueByTitleController()))

  router.delete('/delete/:id', adaptRoute(removeQueueController()))
}
