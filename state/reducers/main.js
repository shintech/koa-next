import C from 'state/constants'

const initialState = {
  loaded: false
}

const trees = (state = initialState, action) => {
  switch (action.type) {
    case C.TOGGLE_IN:
      return { ...state, loaded: action.payload }
    default:
      return state
  }
}

export default trees
