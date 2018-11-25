module.exports = {
  fetch: ctx => {
    ctx.status = 200
    ctx.set('Content-Type', 'application/json')
    ctx.body = {
      value: 0,
      message: 'ok'
    }
  }
}
