import { adaptRoute } from '@src/main/adapters'
import {
  addTicketController,
  loadTicketsByQueueIdController,
  loadTicketsByStatusController,
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

  router.get('/tickets-by-status', adaptRoute(loadTicketsByStatusController()))

  router.delete('/remove-tickets', adaptRoute(removeTicketsController()))
}
