import { takeLatest, put } from 'redux-saga/effects'
import * as fromActions from '../actions'
import * as fromApi from '../api'

function* watchGetProducts(action){
try{
    const users = yield fromApi.getProducts()
    yield put(fromActions.allProducts(users))
} catch (error) {
    yield put({
        type: 'ERROR',
        error: true,
        payload: error.message
    })
  }
}

function* rootSaga() {
    yield takeLatest(fromActions.GET_PRODUCTS_SAGA, watchGetProducts)
}

export default rootSaga 