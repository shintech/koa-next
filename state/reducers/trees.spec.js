/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from 'state/reducers/trees'
import C from 'state/constants'

describe('REDUX -> REDUCER - /trees -> FETCH_VALUE...', () => {
  const state = {
    value: 0
  }

  const action = {
    type: C.FETCH_VALUE,
    payload: 1
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.value to equal "1"...`, () => {
    expect(results.value).toEqual(1)
  })
})

describe('REDUX -> REDUCER - /trees -> INCREMENT_TREES...', () => {
  const state = {
    value: 0
  }

  const action = {
    type: C.INCREMENT_TREES,
    payload: 1
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.value to equal "1"...`, () => {
    expect(results.value).toEqual(1)
  })
})

describe('REDUX -> REDUCER - /trees -> DECREMENT_TREES...', () => {
  const state = {
    value: 0
  }

  const action = {
    type: C.DECREMENT_TREES,
    payload: 1
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.value to equal "-1"...`, () => {
    expect(results.value).toEqual(-1)
  })
})
