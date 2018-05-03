import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

const INITIAL_STATE = {
  isLoading: false,
  ip: ''
}

const ipRequest = (state = INITIAL_STATE, action) => {
  return {...state, isLoading: true }
}
const ipSuccess = (state = INITIAL_STATE, action) => {
  return {...state, isLoading: false, ip: action.origin }
}

const HANDLERS = {
  [Types.IP_REQUEST]: ipRequest,
  [Types.IP_SUCCESS]: ipSuccess
}
export default createReducer(INITIAL_STATE, HANDLERS)
