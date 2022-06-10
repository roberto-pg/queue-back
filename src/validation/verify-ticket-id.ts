import { HttpService } from '@src/infra/protocols'

export class VerifyTicketId {
  constructor(private readonly prismaServer: HttpService) {}

  async verifyTicketId(id: string) {
    const ticket = await this.prismaServer.connectPrisma().ticket.findUnique({
      where: {
        id,
      },
    })
    return ticket
  }
}
