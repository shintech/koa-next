const http = require('http')
const nextRoutes = require('./routes')
const { parse } = require('url')

const dev = process.env['NODE_ENV'] !== 'production'
const next = require('next')({ dev })
const handle = nextRoutes.getRequestHandler(next)

const app = http.createServer((client_req, client_res) => {
  const parsedURL = parse(client_req.url, true)
  const { pathname } = parsedURL

  const hasPrefix = new RegExp('^/api').test(pathname)

  const options = {
    hostname: 'localhost',
    port: parseInt(process.env['SERVER']),
    path: pathname
  }

  if (hasPrefix) {
    http.get(options, req => {
      client_res.setHeader('Content-Type', 'application/json')

      req.pipe(client_res)
    })
  } else {
    handle(client_req, client_res, parsedURL)
  }
})

module.exports = {
  next,
  app
}
