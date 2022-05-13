import { QueueEntity } from '@src/domain/entities'

export interface AddQueueUseCase {
  add: (
    title: string,
    abbreviation: string,
    priority: number
  ) => Promise<QueueEntity>
}
