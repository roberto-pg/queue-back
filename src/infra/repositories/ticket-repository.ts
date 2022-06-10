import { TicketModel } from '@src/data/models/ticket'
import { QueueRepository } from '@src/data/protocols/queue'
import { TicketRepository } from '@src/data/protocols/ticket'
import { HttpService } from '@src/infra/protocols'
import { io } from '@src/main/server'
import { TicketViewModel } from '@src/presentation/view-models'

export class TicketRepositoryImpl implements TicketRepository {
  constructor(
    private readonly prismaServer: HttpService,
    private readonly queueRepository: QueueRepository
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

    await this.queueRepository.load()

    return ticket
  }

  async loadTickets(): Promise<TicketModel[]> {
    const tickets = await this.prismaServer.connectPrisma().ticket.findMany()

    const formattedTickets = TicketViewModel.mapCollection(tickets)
    io.emit('load_tickets', formattedTickets)

    return tickets
  }

  async loadTicketsByCallSequence(): Promise<TicketModel[]> {
    const tickets = await this.prismaServer.connectPrisma().ticket.findMany({
      where: {
        call_sequence: {
          gt: 0,
        },
      },
      orderBy: {
        call_sequence: 'asc',
      },
    })
    const formattedTickets = TicketViewModel.mapCollection(tickets)
    io.emit('tickets_by_call_sequence', formattedTickets)

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

  async loadTicketById(id: string): Promise<TicketModel | null> {
    const ticket = await this.prismaServer.connectPrisma().ticket.findUnique({
      where: {
        id,
      },
    })

    return ticket
  }

  async removeTickets(): Promise<string> {
    await this.prismaServer.connectPrisma().ticket.deleteMany()

    await this.queueRepository.load()
    await this.loadTickets()

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

    await this.queueRepository.load()
    await this.loadTickets()

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

  async updateTicketCallSequence(
    id: string,
    callSequence: number
  ): Promise<TicketModel> {
    const ticket = await this.prismaServer.connectPrisma().ticket.update({
      data: {
        call_sequence: callSequence,
      },
      where: {
        id,
      },
    })

    await this.loadTicketsByCallSequence()

    return ticket
  }
}
