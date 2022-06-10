import { adaptRoute } from '@src/main/adapters'
import {
  addTicketController,
  loadTicketByIdController,
  loadTicketsByCallSequenceController,
  loadTicketsByStatusController,
  loadTicketsControllers,
  removeTicketsController,
  updateTicketCallSequenceController,
  updateTicketServiceDeskController,
} from '@src/main/factories/ticket'
import { updateTicketStatusController } from '@src/main/factories/ticket/update-ticket-status'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/create-ticket', adaptRoute(addTicketController()))

  router.get('/tickets', adaptRoute(loadTicketsControllers()))

  router.get(
    '/tickets-by-call-sequence',
    adaptRoute(loadTicketsByCallSequenceController())
  )

  router.get(
    '/tickets-by-status/:status',
    adaptRoute(loadTicketsByStatusController())
  )

  router.get('/ticket-by-id/:id', adaptRoute(loadTicketByIdController()))

  router.patch('/update-status', adaptRoute(updateTicketStatusController()))

  router.patch(
    '/update-service-desk',
    adaptRoute(updateTicketServiceDeskController())
  )

  router.patch(
    '/update-call-sequence',
    adaptRoute(updateTicketCallSequenceController())
  )

  router.delete('/remove-tickets', adaptRoute(removeTicketsController()))
}
