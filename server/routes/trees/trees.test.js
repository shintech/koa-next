/* eslint-env jest */

import request from 'supertest'

console.log = jest.fn()

describe('SERVER -> GET /api/posts -> api.fetch()..', () => {
  let ctx, app

  beforeAll(async () => {
    app = _server.listen()

    ctx = await request(app).get('/api/trees')
  })

  afterAll(() => {
    app.close()
  })

  it('expect response body to have property "value"...', async () => {
    expect(ctx.body).toHaveProperty('value')
  })

  it('expect response.body.value to equal "0"...', async () => {
    expect(ctx.body.value).toEqual(0)
  })

  it('expect response body to have property "message"...', async () => {
    expect(ctx.body).toHaveProperty('message')
  })

  it('expect response.body.message to equal "ok"...', async () => {
    expect(ctx.body.message).toEqual('ok')
  })
})
