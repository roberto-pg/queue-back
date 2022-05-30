import { TicketRepository } from '@src/data/protocols/ticket'
import { customException } from '@src/data/errors'
import { TicketModel } from '@src/data/models'
import { v4 as uuid } from 'uuid'

export class InMemoryTicketRepository implements TicketRepository {
  private tickets: TicketModel[] = []

  async addTicket(
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ): Promise<TicketModel> {
    const ticket: TicketModel = {
      queue_id: queueId,
      position,
      timestamp: new Date(timestamp),
      status,
    }

    Object.assign(ticket, {
      id: uuid(),
    })

    this.tickets.push(ticket)

    return this.tickets[0]
  }

  async loadTickets(): Promise<TicketModel[]> {
    throw customException('unimplemented')
  }

  async loadTicketsByQueueId(queueId: string): Promise<TicketModel[]> {
    throw customException('unimplemented')
  }

  async removeTickets(): Promise<string> {
    throw customException('unimplemented')
  }

  async loadTicketsByStatus(
    queueId: string,
    status: string
  ): Promise<TicketModel[]> {
    throw customException('unimplemented')
  }
}
