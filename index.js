const nextjs = require('next')
const path = require('path')
const nextRoutes = require('./routes')
const Router = require('koa-router')
const api = require('./server/router')
const createServer = require('./server')
const createLogger = require('shintech-logger')
const pkg = require('./package.json')

require('dotenv').config({
  path: path.join(__dirname, 'config', 'env', '.env'),
  systemvars: true
})

const port = parseInt(process.env['PORT']) || 8000
const environment = process.env['NODE_ENV'] || 'development'

const config = { port, environment }

const dev = process.env['NODE_ENV'] !== 'production'
const app = nextjs({ dev })
const handle = nextRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const { port, host } = config
    const logger = createLogger(config)

    const server = createServer({ ...config, logger })

    server.use(api.routes())
    server.use(api.allowedMethods())

    const router = new Router()

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(router.routes())
    server.use(router.allowedMethods())

    server.use(ctx => {
      ctx.body = {
        status: 'error'
      }

      ctx.status = 404
    })

    server.listen(port, host)
      .on('listening', () => {
        logger.info(`loading environment -> ${process.env['NODE_ENV']}...`)
        logger.info(`${pkg.name} - version: ${pkg.version} - listening on port ${port}...`)
      })

      .on('error', err => {
        logger.error(err.message)
      })
  })
