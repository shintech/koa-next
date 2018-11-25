/* eslint-env jest */

import filesAPI from 'api/files'
import nock from 'nock'

const list = ['file.mp3', 'file.wav']

nock('http://localhost:8000')
  .get('/api/files')
  .reply(200, {
    list
  })

describe('API -> FILES -> api.list()...', () => {
  let json
  
  beforeAll(async () => {
    json = await filesAPI.list()
  })

  it('expect files to have property "list"...', () => {
    expect(json).toHaveProperty('list')
  })
  
  it(`expect files.list to equal [${list}]`, () => {
    expect(json.list).toEqual(list)
  })
})
