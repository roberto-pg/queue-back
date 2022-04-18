import 'module-alias/register'
import http from 'http'
import { Server } from 'socket.io'
import { env } from '@/main/config/env'
import { setupApp } from '@/main/config/app'

const app = setupApp()

const httpServer = http.createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
  console.log(`Usuário conectado no socket ${socket.id}`)
})

httpServer.listen(env.port, () =>
  console.log(`Server started at Port ${env.port}`)
)

export { httpServer, io }
