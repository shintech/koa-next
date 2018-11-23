import C from 'state/constants'

export default {
  increment: function (value) {
    return {
      type: C.INCREMENT_TREES,
      payload: value
    }
  },

  decrement: function (value) {
    return {
      type: C.DECREMENT_TREES,
      payload: value
    }
  },

  fetchValue: function (value) {
    return {
      type: C.FETCH_VALUE,
      payload: value
    }
  }
}
