import { TicketModel } from '@src/data/models/ticket'

export interface TicketRepository {
  addTicket: (
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ) => Promise<TicketModel>
  loadTickets: () => Promise<TicketModel[]>
  loadTicketsByQueueId: (queueId: string) => Promise<TicketModel[]>
  removeTickets: () => Promise<string>
  loadTicketsByStatus: (
    queueId: string,
    status: string
  ) => Promise<TicketModel[]>
}
