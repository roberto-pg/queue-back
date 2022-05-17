import { httpServer } from './server'
import { env } from '@src/main/config/env'

httpServer.listen(env.port, () =>
  console.log(`Server started at Port ${env.port}`)
)
