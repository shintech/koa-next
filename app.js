const Koa = require('koa')
const nextRoutes = require('./routes')

const app = new Koa()

const dev = process.env['NODE_ENV'] !== 'production'
const next = require('next')({ dev })
const handle = nextRoutes.getRequestHandler(next)

app.use(async ctx => {
  await handle(ctx.req, ctx.res)
  ctx.respond = false
})

module.exports = {
  next,
  app
}