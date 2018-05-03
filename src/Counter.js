import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from './redux/actionCreators'

const Counter = props => {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <p>{JSON.stringify(props)}</p>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(ActionCreators.increment(1, 2)),
    decrement: () => dispatch(ActionCreators.decrement(1))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
