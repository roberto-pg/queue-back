import { Queue } from '@/domain/entities'

export interface AddQueueUseCase {
  add: (title: string, abbreviation: string, priority: number) => Promise<Queue>
}
