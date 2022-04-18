import express, { Express } from 'express'
import setupMiddlewares from '@/main/config/middlewares'
import setupRoutes from '@/main/config/routes'

export const setupApp = (): Express => {
  const app = express()

  app.use(express.static('./public'))

  setupMiddlewares(app)
  setupRoutes(app)

  return app
}
