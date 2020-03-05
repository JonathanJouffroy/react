import { takeLatest, put } from 'redux-saga/effects'
import * as fromActions from '../actions'
import * as fromApi from '../api'

function* watchGetOrders(action){
try{
    const orders = yield fromApi.getOrders()
    yield put(fromActions.allOrders(orders))
} catch (error) {
    yield put({
        type: 'ERROR',
        error: true,
        payload: error.message
    })
  }
}

function* rootSaga() {
    yield takeLatest(fromActions.GET_ORDERS_SAGA, watchGetOrders)
}

export default rootSaga 