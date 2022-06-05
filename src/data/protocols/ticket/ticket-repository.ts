import { TicketModel } from '@src/data/models/ticket'

export interface TicketRepository {
  addTicket: (
    queueId: string,
    position: number,
    timestamp: string,
    status: string,
    queueAbb: string
  ) => Promise<TicketModel>
  loadTickets: () => Promise<TicketModel[]>
  loadTicketsByQueueId: (queueId: string) => Promise<TicketModel[]>
  removeTickets: () => Promise<string>
  loadTicketsByStatus: (status: string) => Promise<TicketModel[]>
  updateTicketStatus: (id: string, status: string) => Promise<TicketModel>
  updateTicketServiceDesk: (
    id: string,
    serviceDesk: number
  ) => Promise<TicketModel>
}
