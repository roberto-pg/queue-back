import { HttpService } from '@/infra/protocols'
import { PrismaClient } from '@prisma/client'

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
