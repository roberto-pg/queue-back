import { QueueEntity } from '@src/domain/entities'

export interface LoadQueuesUseCase {
  call: () => Promise<QueueEntity[]>
}
