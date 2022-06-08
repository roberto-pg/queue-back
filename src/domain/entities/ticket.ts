/* eslint-disable no-unused-vars */
export type TicketEntity = {
  id?: string
  position: number
  timestamp: Date
  status: string
  queue_id: string
  queue_abb: string
  service_desk: number | null
  call_sequence: number | null
}
