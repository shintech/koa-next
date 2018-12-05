const got = require('got')
const { URL } = require('url')
const Router = require('koa-router')
const nextRoutes = require('./routes')
const createLogger = require('shintech-logger')
const createServer = require('./server')
const pkg = require('./package.json')

const PORT = parseInt(process.env['PORT']) || 8000
const SERVER = new URL(process.env['SERVER'] || 'http://localhost:65330')
const NODE_ENV = process.env['NODE_ENV'] || 'development'

const next = require('next')({ dev: NODE_ENV !== 'production' })
const handle = nextRoutes.getRequestHandler(next)

next.prepare()
  .then(() => {
    const logger = createLogger()
    const router = new Router()

    const server = createServer({ logger })

    router.get('/api/*', async (ctx, next) => {
      ctx.body = await got.stream(`${SERVER.origin}${ctx.path}`)
    })

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.use(router.routes())
    server.use(router.allowedMethods())

    logger.info(`initializing -> ${pkg.name} - version: ${pkg.version}...`)
    logger.info(`config: ${JSON.stringify({ PORT, SERVER, NODE_ENV })}...`)

    const listening = (app, port, host) => logger.info(`${app} -> listening at ${host}:${port}...`)
    const handleError = (err) => logger.error(err.message)

    server.listen(PORT)
      .on('listening', () => listening('server', PORT, '0.0.0.0'))
      .on('error', err => handleError(err))
  })
