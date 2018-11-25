import C from 'state/constants'

export default {
  listSuccess: payload => ({
      type: C.FILE_LIST_SUCCESS,
      payload
  }),
  
  selectNowPlaying: payload => ({
    type: C.SELECT_NOW_PLAYING,
    payload
  })
}
