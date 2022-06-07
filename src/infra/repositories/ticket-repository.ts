import { TicketModel } from '@src/data/models/ticket'
import { QueueRepository } from '@src/data/protocols/queue'
import { TicketRepository } from '@src/data/protocols/ticket'
import { HttpService } from '@src/infra/protocols'
import { io } from '@src/main/server'
import { TicketViewModel } from '@src/presentation/view-models'

export class TicketRepositoryImpl implements TicketRepository {
  constructor(
    private readonly prismaServer: HttpService,
    private readonly queuerepository: QueueRepository
  ) {}

  async addTicket(
    queueId: string,
    position: number,
    timestamp: string,
    status: string,
    queueAbb: string
  ): Promise<TicketModel> {
    const ticket = await this.prismaServer.connectPrisma().ticket.create({
      data: {
        queue_id: queueId,
        position,
        timestamp: new Date(timestamp),
        status,
        queue_abb: queueAbb,
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

    const formattedTickets = TicketViewModel.mapCollection(tickets)
    io.emit('tickets_called', formattedTickets)

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
    await this.loadTicketsByStatus('called')

    return ticket
  }

  async updateTicketServiceDesk(
    id: string,
    serviceDesk: number
  ): Promise<TicketModel> {
    const ticket = await this.prismaServer.connectPrisma().ticket.update({
      data: {
        service_desk: serviceDesk,
      },
      where: {
        id,
      },
    })

    return ticket
  }
}
