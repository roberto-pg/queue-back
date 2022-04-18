/* eslint-disable no-unused-vars */
export type Order = {
  id?: string
  queue_id: string
  position: number
  timestamp: Date
  status: OrderStatus
}

enum OrderStatus {
  waiting,
  attending,
  notAnshered
}
