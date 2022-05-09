import { QueueEntity } from '@/domain/entities'

export interface LoadQueuesUseCase {
  load: () => Promise<QueueEntity[]>
}
