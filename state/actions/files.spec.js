/* eslint-env jest */

import { initStore } from 'state'
import actions from 'state/actions/files'

describe('REDUX -> ACTION - /files -> listSuccess()...', () => {
  const store = initStore({}, { isServer: true })
  
  const payload = ['ding.mp3', 'file.wav']

  beforeAll(() => {
    store.dispatch(actions.listSuccess(payload))
  })

  it('expect files.list to equal payload...', () => {
    expect(store.getState().files.list).toEqual(payload)
  })
})

describe('REDUX -> ACTION - /files -> selectNowPlaying()...', () => {
  const store = initStore({}, { isServer: true }
  )
  const payload = 'file.mp3'

  beforeAll(() => {
    store.dispatch(actions.selectNowPlaying(payload))
  })

  it('expect files.list to equal payload...', () => {
    expect(store.getState().files.nowPlaying).toEqual(payload)
  })
})
