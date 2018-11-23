/* eslint-env jest */

import { initStore } from 'state'
import actions from 'state/actions/main'

describe('REDUX -> ACTION - /main -> toggleInProp()...', () => {
  const store = initStore({}, { isServer: true })

  beforeAll(() => {
    store.dispatch(actions.toggleInProp(true))
  })

  it('expect about to have property "inProp"...', () => {
    expect(store.getState().main).toHaveProperty('loaded')
  })

  it('expect about.inProp to be true...', () => {
    expect(store.getState().main.loaded).toBeTruthy()
  })

  it('expect about.inProp to be false...', () => {
    store.dispatch(actions.toggleInProp(false))

    expect(store.getState().main.loaded).toBeFalsy()
  })
})
