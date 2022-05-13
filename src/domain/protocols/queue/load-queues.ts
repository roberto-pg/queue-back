import { QueueEntity } from '@src/domain/entities'

export interface LoadQueuesUseCase {
  load: () => Promise<QueueEntity[]>
}
