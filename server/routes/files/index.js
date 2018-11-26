const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readDir = promisify(fs.readdir)

var mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript',
  mp3: 'audio/mpeg',
  wav: 'audio/wav'
}

module.exports = {
  list: async ctx => {
    let body

    try {
      body = await readDir('static/files')
    } catch (err) {
      body = err.message
    }

    ctx.status = 200
    ctx.body = body
  },

  fetch: async (ctx, next) => {
    const file = path.join('static', 'files', ctx.params.filename)
    const type = mime[path.extname(file).slice(1)] || 'text/plain'
    const stream = fs.createReadStream(file)

    await next()

    ctx.status = 200
    ctx.set({ 'Content-Type': type })
    ctx.body = stream
  }
}
