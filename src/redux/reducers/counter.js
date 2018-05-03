import { Types } from '../actionCreators'

function reducer (state = 0, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return state + action.value * action.multiplier
    case Types.DECREMENT:
      return state - action.value
  }
  return state
}
export default reducer
