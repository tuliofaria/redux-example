import React from 'react'
import { connect } from 'react-redux'

const Header = props => {
  return (
    <div>
      <h1>User: {JSON.stringify(props.counter)}</h1>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
export default connect(mapStateToProps)(Header)
