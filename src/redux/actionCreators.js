import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  increment: ['value', 'multiplier'],
  decrement: ['value'],

  ipRequest: null,
  ipSuccess: ['origin']

})
export default Creators
