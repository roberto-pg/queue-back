import { TicketRepository } from '@src/data/protocols/ticket'
import { customException } from '@src/data/errors'
import { TicketModel } from '@src/data/models'
import { v4 as uuid } from 'uuid'
import { TicketEntity } from '@src/domain/entities'

export class InMemoryTicketRepository implements TicketRepository {
  private tickets: TicketModel[] = []

  async addTicket(
    queueId: string,
    position: number,
    timestamp: string,
    status: string,
    queueAbb: string
  ): Promise<TicketModel> {
    const ticket: TicketModel = {
      queue_id: queueId,
      position,
      timestamp: new Date(timestamp),
      status,
      service_desk: null,
      queue_abb: queueAbb,
      call_sequence: null,
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

  async loadTicketsByCallSequence(): Promise<TicketModel[]> {
    throw customException('unimplemented')
  }

  async removeTickets(): Promise<string> {
    throw customException('unimplemented')
  }

  async loadTicketsByStatus(status: string): Promise<TicketModel[]> {
    throw customException('unimplemented')
  }

  async updateTicketStatus(id: string, status: string): Promise<TicketEntity> {
    throw customException('unimplemented')
  }

  async updateTicketServiceDesk(
    id: string,
    serviceDesk: number
  ): Promise<TicketEntity> {
    throw customException('unimplemented')
  }

  async updateTicketCallSequence(
    id: string,
    callSequence: number
  ): Promise<TicketEntity> {
    throw customException('unimplemented')
  }
}
