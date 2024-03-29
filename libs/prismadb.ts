import { PrismaClient } from '@prisma/client'
import { deAT } from 'date-fns/locale'

declare global {
  var prisma: PrismaClient | undefined
}

const client = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = client

export default client;