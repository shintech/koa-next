const Router = require('koa-router')
const trees = require('./routes/trees')
const about = require('./routes/about')

module.exports = new Router({
  prefix: '/api'
})

  .use(async (ctx, next) => {
    await next()

    ctx.set('Content-Type', 'application/json')
  })

  .get('/trees', trees.fetch)
  .get('/about', about.fetch)
