import { adaptRoute } from '@src/main/adapters'
import {
  addTicketController,
  loadTicketsByQueueIdController,
  loadTicketsControllers,
  removeTicketsController,
} from '@src/main/factories/ticket'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/create-ticket', adaptRoute(addTicketController()))

  router.get('/tickets', adaptRoute(loadTicketsControllers()))

  router.get(
    '/tickets-by-queue-id/:queueId',
    adaptRoute(loadTicketsByQueueIdController())
  )

  router.delete('/remove-tickets', adaptRoute(removeTicketsController()))
}
