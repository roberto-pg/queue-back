import { HttpService } from '@src/infra/protocols'
import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export class PrismaServer implements HttpService {
  connectAny() {
    throw new Error('Method not implemented.')
  }

  connectPrisma() {
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }

    return global.prisma
  }
}
