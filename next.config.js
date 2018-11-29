const path = require('path')
const webpack = require("webpack")
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

      config.plugins = [
        ...config.plugins,
        
        new webpack.DefinePlugin({
          'process.env.PORT': JSON.stringify(process.env['PORT']),
          'process.env.HOST': JSON.stringify(process.env['HOST']),
          'process.env.SERVER': JSON.stringify(process.env['SERVER']),
          'process.env.BASE_URL': JSON.stringify(process.env['BASE_URL']),
          'process.env.EMAIL': JSON.stringify(process.env['EMAIL'])
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
