/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from 'state/reducers/files'
import C from 'state/constants'

describe('REDUX -> REDUCER - /files -> FILE_LIST_SUCCESS...', () => {
  const state = {
    list: [],
    loaded: false
  }
  
  const payload = ['file.mp3', 'file.wav']
  
  const action = {
    type: C.FILE_LIST_SUCCESS,
    payload,
    loaded: true
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
