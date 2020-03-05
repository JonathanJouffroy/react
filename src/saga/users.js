import { takeLatest, put } from 'redux-saga/effects'
import * as fromActions from '../actions'
import * as fromApi from '../api'

function* watchGetUsers(action){
try{
    const users = yield fromApi.getUsers()
    yield put(fromActions.allUsers(users))
} catch (error) {
    yield put({
        type: 'ERROR',
        error: true,
        payload: error.message
    })
  }
}

function* rootSaga() {
    yield takeLatest(fromActions.GET_USERS_SAGA, watchGetUsers)
}

export default rootSaga 