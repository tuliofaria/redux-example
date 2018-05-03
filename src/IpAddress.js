import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from './redux/actionCreators'

const IpAddress = ({ ip, isLoading, ipRequest }) => {
  if (isLoading) {
    return <p>Is loading...</p>
  }
  return (
    <div>
      <button onClick={ipRequest}>Get my ip</button>
      { ip !== '' && <p>{ip}</p> }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    ip: state.ip.ip,
    isLoading: state.ip.isLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ipRequest: () => dispatch(ActionCreators.ipRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IpAddress)
