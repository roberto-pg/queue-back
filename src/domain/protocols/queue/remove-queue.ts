export interface RemoveQueueUseCase {
  call: (id: string) => Promise<string>
}
