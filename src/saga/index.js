import { fork } from 'redux-saga/effects'
import users from './users'
import socket from './socket'

function* rootSaga(){
    yield fork(users)
    yield fork(socket)
}

export default rootSaga