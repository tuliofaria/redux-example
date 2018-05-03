/*global fetch */
import { put } from 'redux-saga/effects'
import ActionCreators from '../actionCreators'

export function* getIp () {
  const ip = yield fetch('http://httpbin.org/ip')
  const json = yield ip.json()
  yield put(ActionCreators.ipSuccess(json.origin))
}
