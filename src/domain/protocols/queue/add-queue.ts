import { QueueEntity } from '@src/domain/entities'

export interface AddQueueUseCase {
  call: (
    title: string,
    abbreviation: string,
    priority: number
  ) => Promise<QueueEntity>
}
