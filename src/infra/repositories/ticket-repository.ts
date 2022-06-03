import { TicketModel } from '@src/data/models/ticket'
import { QueueRepository } from '@src/data/protocols/queue'
import { TicketRepository } from '@src/data/protocols/ticket'
import { HttpService } from '@src/infra/protocols'

export class TicketRepositoryImpl implements TicketRepository {
  constructor(
    private readonly prismaServer: HttpService,
    private readonly queuerepository: QueueRepository
  ) {}

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

    await this.queuerepository.load()

    return ticket
  }

  async loadTickets(): Promise<TicketModel[]> {
    const tickets = await this.prismaServer.connectPrisma().ticket.findMany()

    return tickets
  }

  async loadTicketsByQueueId(queueId: string): Promise<TicketModel[]> {
    const tickets = await this.prismaServer.connectPrisma().ticket.findMany({
      where: {
        queue_id: queueId,
      },
    })

    return tickets
  }

  async loadTicketsByStatus(status: string): Promise<TicketModel[]> {
    const tickets = await this.prismaServer.connectPrisma().ticket.findMany({
      where: {
        status,
      },
    })

    return tickets
  }

  async removeTickets(): Promise<string> {
    await this.prismaServer.connectPrisma().ticket.deleteMany()

    await this.queuerepository.load()

    return 'Tickets removidos'
  }

  async updateTicketStatus(id: string, status: string): Promise<TicketModel> {
    const ticket = await this.prismaServer.connectPrisma().ticket.update({
      data: {
        status: status,
      },
      where: {
        id,
      },
    })

    await this.queuerepository.load()

    return ticket
  }
}
