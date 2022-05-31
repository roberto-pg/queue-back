import { HttpService } from '@src/infra/protocols'

export class VerifyQueueTitle {
  constructor(private readonly prismaServer: HttpService) {}

  async verifyQueueTitle(title: string) {
    const queue = await this.prismaServer.connectPrisma().queue.findFirst({
      where: {
        title,
      },
    })
    return queue
  }
}
