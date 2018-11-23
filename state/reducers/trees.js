import C from 'state/constants'

const initialState = {
  value: 0
}

const trees = (state = initialState, action) => {
  switch (action.type) {
    case C.INCREMENT_TREES:
      return { ...state, value: state.value + action.payload }

    case C.DECREMENT_TREES:
      return { ...state, value: state.value - action.payload }

    case C.FETCH_VALUE:
      return { ...state, value: action.payload }

    default:
      return state
  }
}

export default trees
