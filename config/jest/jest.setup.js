import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import createServer from '../..//server'
import createLogger from 'shintech-logger'
import api from '../../server/router'

configure({ adapter: new Adapter() })

const environment = 'test'

const config = { environment, api }

global.process.env = {
  NODE_ENV: environment,
  BASE_URL: 'http://localhost:8000',
  PORT: 8000,
  HOST: 'localhost'
}

const logger = createLogger(config)

const server = createServer({ ...config, logger })

server.use(api.routes())
server.use(api.allowedMethods())

global._server = server

global.React = React

global._treesMock = {
  value: 0,
  message: 'ok'
}
