import C from 'state/constants'

const initialState = {
  list: [],
  loaded: false
}

const files = (state = initialState, action) => {
  switch (action.type) {
    case C.FILE_LIST_SUCCESS:
      return { ...state, list: action.payload, loaded: true }

    default:
      return state
  }
}

export default files
