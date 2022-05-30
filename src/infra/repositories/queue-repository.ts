import { QueueModel } from '@src/data/models'
import { QueueRepository } from '@src/data/protocols/queue'
import { HttpService } from '@src/infra/protocols'
import { io } from '@src/main/server'

export class QueueRepositoryImpl implements QueueRepository {
  constructor(private readonly prismaServer: HttpService) {}

  async addQueue(
    title: string,
    abbreviation: string,
    priority: number
  ): Promise<QueueModel> {
    const queue = await this.prismaServer.connectPrisma().queue.create({
      data: {
        title,
        abbreviation,
        priority,
      },
    })

    await this.load()

    return queue
  }

  async load(): Promise<QueueModel[]> {
    const queues = await this.prismaServer.connectPrisma().queue.findMany({
      orderBy: {
        priority: 'desc',
      },
    })

    io.emit('load_queues', queues)

    return queues
  }

  async removeQueueById(id: string): Promise<string> {
    const queue = await this.prismaServer.connectPrisma().queue.delete({
      where: {
        id,
      },
    })

    await this.load()

    return queue.id
  }
}
