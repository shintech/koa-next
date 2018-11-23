/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from 'state/reducers/about'
import C from 'state/constants'

describe('REDUX -> REDUCER - /about -> FETCH_ABOUT...', () => {
  const state = {
    data: '',
    title: ''
  }

  const action = {
    type: C.FETCH_ABOUT,
    payload: {
      title: 'title',
      data: 'data'
    }
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.title to equal "title"...`, () => {
    expect(results.title).toEqual('title')
  })

  it(`expect results.data to equal "data"...`, () => {
    expect(results.data).toEqual('data')
  })
})
