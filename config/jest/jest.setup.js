import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import createServer from '../..//server'
import createLogger from 'shintech-logger'
import api from '../../server/router'

configure({ adapter: new Adapter() })

global.process.env = {
  NODE_ENV: 'test',
  BASE_URL: 'http://localhost:8000',
  PORT: 8000,
  HOST: 'localhost'
}

const logger = createLogger()

const server = createServer({ api, logger })

global._server = server

global.React = React

global._treesMock = {
  value: 0,
  message: 'ok'
}
