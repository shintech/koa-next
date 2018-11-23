/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from 'state/reducers/main'
import C from 'state/constants'

describe('REDUX -> REDUCER - /main -> TOGGLE_IN...', () => {
  const state = {
    loaded: false
  }

  const action = {
    type: C.TOGGLE_IN,
    payload: true
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.inProp to be true...`, () => {
    expect(results.loaded).toBeTruthy()
  })
})

describe('REDUX -> REDUCER - /main -> TOGGLE_IN...', () => {
  const state = {
    loaded: true
  }

  const action = {
    type: C.TOGGLE_IN,
    payload: false
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.inProp to be false...`, () => {
    expect(results.loaded).toBeFalsy()
  })
})
