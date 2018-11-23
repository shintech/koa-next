const path = require('path')
const createServer = require('./server')
const createLogger = require('shintech-logger')
const { next, app } = require('./app')
const api = require('./server/router')
const pkg = require('./package.json')

require('dotenv').config({
  path: path.join(__dirname, 'config', 'env', '.env'),
  systemvars: true
})

const port = parseInt(process.env['PORT']) || 8000
const environment = process.env['NODE_ENV'] || 'development'

const config = { port, environment, api }

next.prepare()
  .then(() => {
    const { port, host } = config
    const logger = createLogger(config)

    logger.info(`initializing -> ${pkg.name} - version: ${pkg.version}...`)
    logger.info(`config: ${JSON.stringify({ port, environment })}...`)

    const server = createServer({ ...config, logger })

    const listening = (app, port) => logger.info(`${app} -> listening on port ${port}...`)
    const handleError = (err) => logger.error(err.message)

    server.listen(port + 1, host)
      .on('listening', () => {
        listening('server', port + 1)

        app.listen(port)
          .on('listening', () => listening('app', port))
          .on('error', err => handleError(err))
      })

      .on('error', err => handleError(err))
  })
