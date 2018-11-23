/* eslint-env jest */

import api from 'api/trees'
import nock from 'nock'

console.log = jest.fn()

nock('http://localhost:8000')
  .get('/api/trees')
  .reply(200, _treesMock)

describe('API -> TREES -> api.getTrees()...', () => {
  let json

  beforeAll(async () => {
    json = await api.fetch('http://localhost:8000')
  })

  it('expect trees to have property "value"...', () => {
    expect(json).toHaveProperty('value')
  })

  it('expect trees.value to equal mock.value...', () => {
    expect(json.value).toEqual(_treesMock.value)
  })

  it('expect trees to have property "message"...', () => {
    expect(json).toHaveProperty('value')
  })

  it('expect trees.message to equal mock.message...', () => {
    expect(json.message).toEqual(_treesMock.message)
  })
})
