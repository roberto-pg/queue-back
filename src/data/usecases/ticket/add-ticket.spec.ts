import { TicketRepository } from '@src/data/protocols/ticket'
import { AddTicketUseCaseImpl } from '@src/data/usecases/ticket/add-ticket'
import { AddTicketUseCase } from '@src/domain/protocols/ticket'
import { InMemoryTicketRepository } from '@src/infra/repositories/in-memory-ticket-repository'

describe('Create new ticket', () => {
  let ticketRepository: TicketRepository
  let sut: AddTicketUseCase
  const queueId = 'a8e4baae-d5b4-4478-a498-4294a90ba8cf'
  const position = 5
  const timestamp = '2022-03-21 18:37:30'
  const status = 'waiting'

  beforeAll(() => {
    ticketRepository = new InMemoryTicketRepository()
    sut = new AddTicketUseCaseImpl(ticketRepository)
  })

  it('should be able to create a new ticket', async () => {
    const ticket = await sut.call(queueId, position, timestamp, status)

    expect(ticket).toHaveProperty('id')
    expect(ticket.position).toBe(5)
  })
})
