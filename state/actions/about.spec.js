/* eslint-env jest */

import { initStore } from 'state'
import actions from 'state/actions/about'

describe('REDUX -> ACTION - /about -> fetch()...', () => {
  const store = initStore({}, { isServer: true })

  beforeAll(() => {
    store.dispatch(actions.fetch({
      title: 'title',
      data: 'data'
    }))
  })

  it('expect about to have property "title"...', () => {
    expect(store.getState().about).toHaveProperty('title')
  })

  it('expect about.title to equal "title"...', () => {
    expect(store.getState().about.title).toBe('title')
  })

  it('expect about to have property "data"...', () => {
    expect(store.getState().about).toHaveProperty('data')
  })

  it('expect about.data to equal "data"...', () => {
    expect(store.getState().about.data).toBe('data')
  })
})
