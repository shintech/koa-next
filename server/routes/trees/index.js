module.exports = {
  fetch: ctx => {
    ctx.status = 200
    ctx.body = {
      value: 0,
      message: 'ok'
    }
  }
}
