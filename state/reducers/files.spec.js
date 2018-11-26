/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from 'state/reducers/files'
import C from 'state/constants'

describe('REDUX -> REDUCER - /files -> FILE_LIST_SUCCESS...', () => {
  const state = {
    list: [],
    loaded: false,
    nowPlaying: null
  }

  const payload = ['file.mp3', 'file.wav']

  const action = {
    type: C.FILE_LIST_SUCCESS,
    payload
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.list to equal payload...`, () => {
    expect(results.list).toEqual(payload)
  })

  it(`expect results.loaded to be true...`, () => {
    expect(results.loaded).toBeTruthy()
  })
})

describe('REDUX -> REDUCER - /files -> SELECT_NOW_PLAYING...', () => {
  const state = {
    list: [],
    loaded: false,
    nowPlaying: null
  }

  const payload = 'file.mp3'

  const action = {
    type: C.SELECT_NOW_PLAYING,
    payload
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.list to equal payload...`, () => {
    expect(results.nowPlaying).toEqual(payload)
  })
})
