import { QueueEntity } from '@src/domain/entities'

export interface LoadQueueByTitleUseCase {
  call: (title: string) => Promise<QueueEntity | null>
}
