import { QueueModel } from '@src/data/models'

export interface QueueRepository {
  addQueue: (
    title: string,
    abbreviation: string,
    priority: number
  ) => Promise<QueueModel>

  load: () => Promise<QueueModel[]>

  loadByTitle: (title: string) => Promise<QueueModel | null>

  removeQueueById: (id: string) => Promise<string>
}
