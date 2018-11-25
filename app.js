const http = require('http')
const nextRoutes = require('./routes')
const { parse } = require('url')

const dev = process.env['NODE_ENV'] !== 'production'
const next = require('next')({ dev })
const handle = nextRoutes.getRequestHandler(next)

const app = http.createServer((clientReq, clientRes) => {
  const parsedURL = parse(clientReq.url, true)
  const { pathname } = parsedURL

  const hasPrefix = new RegExp('^/api').test(pathname)

  const options = {
    hostname: 'localhost',
    port: parseInt(process.env['SERVER']),
    path: pathname
  }

  if (hasPrefix) {
    http.get(options, req => {
      clientRes.setHeader('Content-Type', 'application/json')

      req.pipe(clientRes)
    })
  } else {
    handle(clientReq, clientRes, parsedURL)
  }
})

module.exports = {
  next,
  app
}
