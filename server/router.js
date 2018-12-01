const Router = require('koa-router')
const trees = require('./routes/trees')
const about = require('./routes/about')

module.exports = new Router({
  prefix: '/api'
})

  .get('/trees', trees.fetch)
  .get('/about', about.fetch)
