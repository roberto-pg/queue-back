import './util/module-alias'
import http from 'http'
import { Server } from 'socket.io'
import { setupApp } from '@src/main/config/app'

const app = setupApp()

const httpServer = http.createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log(`Usuário conectado no socket ${socket.id}`)
  socket.on('disconnect', () => console.log('Usuário desconectado'))
})

export { httpServer, io }
