const path = require('path')
const createServer = require('./server')
const createLogger = require('shintech-logger')
const { next, app } = require('./app')
const api = require('./server/router')
const pkg = require('./package.json')

const PORT = parseInt(process.env['PORT']) || 8000
const SERVER = parseInt(process.env['SERVER']) || 65330
const NODE_ENV = process.env['NODE_ENV'] || 'development'

next.prepare()
  .then(() => {
    const logger = createLogger()

    logger.info(`initializing -> ${pkg.name} - version: ${pkg.version}...`)
    logger.info(`config: ${JSON.stringify({ PORT, SERVER, NODE_ENV })}...`)

    const server = createServer({ api, logger })

    const listening = (app, port, host) => logger.info(`${app} -> listening at ${host}:${port}...`)
    const handleError = (err) => logger.error(err.message)

    server.listen(SERVER, 'localhost')
      .on('listening', () => listening('server', SERVER, 'localhost'))
      .on('error', err => handleError(err))

    app.listen(PORT)
      .on('listening', () => listening('app', PORT, '0.0.0.0'))
      .on('error', err => handleError(err))
  })
