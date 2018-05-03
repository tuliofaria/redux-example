import { combineReducers } from 'redux'

import counter from './counter'
import auth from './auth'
import ip from './ip'

export default combineReducers({
  counter,
  auth,
  ip
})
