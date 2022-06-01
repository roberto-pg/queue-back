import { adaptRoute } from '@src/main/adapters'
import {
  addTicketController,
  loadTicketsByQueueIdController,
  loadTicketsByStatusController,
  loadTicketsControllers,
  removeTicketsController,
} from '@src/main/factories/ticket'
import { updateTicketStatusController } from '@src/main/factories/ticket/update-ticket-status'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/create-ticket', adaptRoute(addTicketController()))

  router.get('/tickets', adaptRoute(loadTicketsControllers()))

  router.get(
    '/tickets-by-queue-id/:queueId',
    adaptRoute(loadTicketsByQueueIdController())
  )

  router.get(
    '/tickets-by-status/:status',
    adaptRoute(loadTicketsByStatusController())
  )

  router.patch('/update-status', adaptRoute(updateTicketStatusController()))

  router.delete('/remove-tickets', adaptRoute(removeTicketsController()))
}
