import { QueueRepository } from '@src/data/protocols/queue'
import { QueueEntity } from '@src/domain/entities'
import { QueueModel } from '@src/data/models'
import { v4 as uuid } from 'uuid'

export class InMemoryQueueRepository implements QueueRepository {
  private queues: QueueModel[] = []

  async addQueue(
    title: string,
    abbreviation: string,
    priority: number
  ): Promise<QueueModel> {
    const queue: QueueModel = {
      title,
      abbreviation,
      priority,
    }

    Object.assign(queue, {
      id: uuid(),
    })

    this.queues.push(queue)

    return this.queues[0]
  }

  async load(): Promise<QueueEntity[]> {
    this.queues.push({
      id: uuid(),
      title: 'Load queue',
      abbreviation: 'LQ',
      priority: 5,
    })

    return this.queues
  }

  async removeQueueById(id: string): Promise<string> {
    this.queues.push({
      id: 'af19974c-09af-41f3-ae0a-cb2a14c5d102',
      title: 'Will be deleted',
      abbreviation: 'WD',
      priority: 9,
    })
    let queueId: QueueModel[] = []

    const index = this.queues.findIndex(function (queue) {
      return queue.id === id
    })

    if (index !== -1) {
      queueId = this.queues.splice(index, 1)
    }

    return queueId[0].id ?? ''
  }
}
