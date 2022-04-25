import { QueueModel } from '@/data/models'
import { QueueRepository } from '@/data/protocols/queue'
import { HttpService } from '@/infra/protocols'
import { io } from '@/main/server'

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
        priority
      }
    })

    await this.load()

    return queue
  }

  async load(): Promise<QueueModel[]> {
    const queues = await this.prismaServer.connectPrisma().queue.findMany()

    io.emit('load_queues', queues)

    return queues
  }
}
