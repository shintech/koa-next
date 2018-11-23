import { combineReducers } from 'redux'
import trees from './trees'
import about from './about'
import main from './main'

export default combineReducers({
  trees,
  about,
  main
})
