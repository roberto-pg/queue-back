import { QueueRepository } from '@src/data/protocols/queue'
import { QueueEntity } from '@src/domain/entities'
import { customException } from '@src/data/errors'
import { QueueModel } from '@src/data/models'
import { v4 as uuid } from 'uuid'

export class QueueRepositoryInMemory implements QueueRepository {
  private queues: QueueModel[] = []

  async addQueue(
    title: string,
    abbreviation: string,
    priority: number
  ): Promise<QueueModel> {
    let result: QueueModel = {
      id: '',
      title: '',
      abbreviation: '',
      priority: 0,
    }
    const queue = {
      title,
      abbreviation,
      priority,
    }
    Object.assign(queue, {
      id: uuid(),
    })

    this.queues.push(queue)

    result = this.queues[0]

    return result
  }

  load(): Promise<QueueEntity[]> {
    throw customException('Unimplemented')
  }

  deleteQueueById(id: string): Promise<string> {
    throw customException(id.toString())
  }
}
