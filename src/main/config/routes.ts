import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  // eslint-disable-next-line node/no-path-concat
  readdirSync(`${__dirname}/../routes`).map(async (fileName) => {
    // eslint-disable-next-line prettier/prettier
    (await import(`../routes/${fileName}`)).default(router)
  })
}
