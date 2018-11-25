import C from 'state/constants'

export default {
  listSuccess: function (payload) {
    return {
      type: C.FILE_LIST_SUCCESS,
      payload
    }
  }
}
