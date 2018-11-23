const path = require('path')
const Dotenv = require('dotenv-webpack')

const username = process.env['USERNAME']
const password = process.env['PASSWORD']
const BASE_URL = process.env['BASE_URL'] || 'http://localhost:8000'

const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64')

const runtimeConfig = {
  auth,
  BASE_URL
}

module.exports = (phase, { defaultConfig }) => {
  return {
    serverRuntimeConfig: runtimeConfig,
    publicRuntimeConfig: runtimeConfig,

    webpack: (config) => {
      config.plugins = config.plugins || []

      // config.module.rules.push({
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   exclude: [/node_modules/, '/.next'],
      //   loader: 'eslint-loader',
      //   options: {
      //     emitError: false,
      //     emitWarning: true,
      //     failOnWarning: false
      //   }
      // })

      config.plugins = [
        ...config.plugins,

        new Dotenv({
          path: path.join(__dirname, 'config', 'env', '.env'),
          systemvars: true
        })
      ]

      return config
    }
  }
}
