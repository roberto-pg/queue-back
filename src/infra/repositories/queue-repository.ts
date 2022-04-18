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

    // const queueTeste = {
    //   title: queue.title,
    //   abbreviation: queue.abbreviation,
    //   priority: queue.priority
    // }

    io.emit('new_message', queue)

    io.on('new_message', (message) => {
      console.log(message)
    })

    return queue
  }
}
