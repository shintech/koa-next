const webpack = require('webpack')
const PKG = require('./package.json')

const USERNAME = process.env['USERNAME']
const PASSWORD = process.env['PASSWORD']
const BASE_URL = process.env['BASE_URL'] || 'http://localhost:8000'
const DOMAIN = process.env['DOMAIN'] || 'example.domain'

const AUTH = 'Basic ' + Buffer.from(USERNAME + ':' + PASSWORD).toString('base64')

const runtimeConfig = {
  AUTH,
  BASE_URL,
  DOMAIN,
  PKG
}

module.exports = (phase, { defaultConfig }) => {
  return {
    serverRuntimeConfig: runtimeConfig,
    publicRuntimeConfig: runtimeConfig,

    webpack: (config) => {
      config.plugins = config.plugins || []

      config.plugins = [
        ...config.plugins,

        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env['NODE_ENV'])
        })
      ]

      config.module.rules.push({
        test: /\.(txt|jpg|png|svg|mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: '',
              emitFile: true,
              name: '[path][name].[ext]'
            }
          }
        ]
      })

      // config.modules.rules.push({
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

      return config
    }
  }
}
