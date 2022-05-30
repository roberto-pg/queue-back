import { TicketModel } from '@src/data/models/ticket'
import { TicketRepository } from '@src/data/protocols/ticket'
import { TicketEntity } from '@src/domain/entities'
import { HttpService } from '@src/infra/protocols'
import { io } from '@src/main/server'

export class TicketRepositoryImpl implements TicketRepository {
  constructor(private readonly prismaServer: HttpService) {}

  async addTicket(
    queueId: string,
    position: number,
    timestamp: string,
    status: string
  ): Promise<TicketModel> {
    const ticket = await this.prismaServer.connectPrisma().ticket.create({
      data: {
        queue_id: queueId,
        position,
        timestamp: new Date(timestamp),
        status,
      },
    })

    return ticket
  }

  async loadTickets(): Promise<TicketEntity[]> {
    const tickets = await this.prismaServer.connectPrisma().ticket.findMany()

    return tickets
  }

  async loadTicketsByQueueId(queueId: string): Promise<TicketEntity[]> {
    const tickets = await this.prismaServer.connectPrisma().ticket.findMany({
      where: {
        queue_id: queueId,
      },
    })

    return tickets
  }

  async removeTickets(): Promise<string> {
    await this.prismaServer.connectPrisma().ticket.deleteMany()
    return 'Tickets removidos'
  }

  async loadTicketsByStatus(
    queueId: string,
    status: string
  ): Promise<TicketEntity[]> {
    const tickets = await this.prismaServer.connectPrisma().ticket.findMany({
      where: {
        queue_id: queueId,
        status,
      },
    })

    io.emit('load_tickets', tickets)

    return tickets
  }
}
