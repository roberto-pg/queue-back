import { QueueModel } from '@/data/models/queue'

export interface QueueRepository {
  addQueue: (
    title: string,
    abbreviation: string,
    priority: number
  ) => Promise<QueueModel>
}
