import { createStore, applyMiddleware } from 'redux'
import withRedux from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import reducers from 'state/reducers'

const middleWare = () => [
  thunk
]

export const initStore = (initialState = {}, c) => {
  return createStore(reducers, initialState, applyMiddleware(...middleWare()))
}

export const reduxPage = (comp) => withRedux(initStore)(comp)
