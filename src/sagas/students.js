import { 
    takeLatest,
    put
 } from 'redux-saga/effects'
 import * as fromActions from '../actions'
 import * as fromApi from '../api'

 function* watchGetStudents(action) {
     try {
         const students = yield fromApi.getStudents();
         yield put(fromActions.allStudents(students))
     }
     catch (error)
     {
        yield put ({
            type: 'ERROR',
            error: true,
            payload: error.message
        })
     }
 }

 function* rootSaga() {
     yield takeLatest(fromActions.GET_STUDENTS_SAGA, watchGetStudents)
 }

 export default rootSaga