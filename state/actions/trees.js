import C from 'state/constants'

export default {
  increment: value => ({
    type: C.INCREMENT_TREES,
    payload: value
  }),

  decrement: payload => ({
    type: C.DECREMENT_TREES,
    payload
  }),

  fetchValue: payload => ({
    type: C.FETCH_VALUE,
    payload
  })
}
