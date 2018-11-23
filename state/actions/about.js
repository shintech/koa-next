import C from 'state/constants'

export default {
  fetch: (payload) => ({
    type: C.FETCH_ABOUT,
    payload
  })
}
