export interface DeleteQueueUseCase {
  delete: (id: string) => Promise<string>
}
