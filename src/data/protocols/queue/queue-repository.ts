import { QueueModel } from '@/data/models'

export interface QueueRepository {
  addQueue: (
    title: string,
    abbreviation: string,
    priority: number
  ) => Promise<QueueModel>

  load: () => Promise<QueueModel[]>

  deleteQueueById: (id: string) => Promise<string>
}
