import { takeLatest, all } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import { getIp } from './ipSagas'

export default function* rootSaga () {
  yield all([
    takeLatest(Types.IP_REQUEST, getIp)
  ])
}
