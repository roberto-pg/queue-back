import { PrismaClient } from '@prisma/client'

export interface HttpService {
  connectPrisma(): PrismaClient
}
