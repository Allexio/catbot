import { combineReducers } from 'redux'

import todo from './components/todo/reducer'

const reducers = {
  todo
}

export default combineReducers(reducers)
