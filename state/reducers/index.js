import { combineReducers } from 'redux'
import trees from './trees'
import about from './about'
import files from './files'

export default combineReducers({
  trees,
  about,
  files
})
