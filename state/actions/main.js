import C from 'state/constants'

export default {
  toggleInProp: (payload) => ({
    type: C.TOGGLE_IN,
    payload
  })
}
