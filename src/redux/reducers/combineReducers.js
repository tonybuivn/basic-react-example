import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import postReducer from './postReducer'

export default combineReducers({
  counterReducer,
  postReducer
})
