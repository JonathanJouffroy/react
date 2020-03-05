import { fork } from 'redux-saga/effects'
import users from './users'
import socket from './socket'
import products from './products'
import orders from './orders'

function* rootSaga(){
    yield fork(users)
    yield fork(socket)
    yield fork(products)
    yield fork(orders)
}

export default rootSaga