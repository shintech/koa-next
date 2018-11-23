/* eslint-env jest */

import api from 'api/about'
import nock from 'nock'

console.log = jest.fn()

nock('http://localhost:8000')
  .get('/api/about')
  .reply(200, {
    data: 'data',
    title: 'title'
  })

describe('API -> ABOUT -> api.about()...', () => {
  let json

  beforeAll(async () => {
    json = await api.fetch('http://localhost:8000')
  })

  it('expect about to have property "title"...', () => {
    expect(json).toHaveProperty('title')
  })

  it('expect about.title to equal "title"...', () => {
    expect(json.title).toEqual('title')
  })

  it('expect about to have property "data"...', () => {
    expect(json).toHaveProperty('data')
  })

  it('expect about.data to equal "data"...', () => {
    expect(json.data).toEqual('data')
  })
})
