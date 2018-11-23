import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import withRedux from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import reducers from 'state/reducers'

const clientLogger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const serverLogger = store => next => action => {
  console.info('\x1b[35m%s\x1b[0m', 'redux\x1b[0m:', `dispatching server action ${action.type}...`)
  return next(action)
}

const middleWare = server => [
  thunk,
  (server) ? serverLogger : clientLogger
]

export const initStore = (initialState = {}, ctx) => {
  const { isServer } = ctx
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleWare(isServer))))
}

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers')
    initStore.replaceReducer(nextReducer)
  })
}

export const reduxPage = (comp) => withRedux(initStore)(comp)
