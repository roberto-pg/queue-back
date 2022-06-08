// import { HttpService } from '@src/infra/protocols'

// export class VerifyQueueId {
//   constructor(private readonly prismaServer: HttpService) {}

//   async verifyQueueId(queueId: string) {
//     const queue = await this.prismaServer.connectPrisma().queue.findUnique({
//       where: {
//         id: queueId,
//       },
//     })
//     return queue
//   }
// }
