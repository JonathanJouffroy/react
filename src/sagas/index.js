import { fork } from 'redux-saga/effects'
import students from './students'
import socket from './socket'

function* rootSaga() {
    yield fork(students)
    yield fork(socket)
}

export default rootSaga