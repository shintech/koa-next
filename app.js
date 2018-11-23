const { createServer } = require('http')
const nextRoutes = require('./routes')
const { parse } = require('url')

const dev = process.env['NODE_ENV'] !== 'production'
const next = require('next')({ dev })
const handle = nextRoutes.getRequestHandler(next)

const app = createServer((req, res) => {
  const parsedUrl = parse(req.url, true)

  handle(req, res, parsedUrl)
})

module.exports = {
  next,
  app
}
