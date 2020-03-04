import * as fromAPI from '../api';

export const ADD_ONE = "ADD_ONE"
export const ADD_X = "ADD_X"
export const GET_STUDENTS = "GET_STUDENTS"
export const GET_STUDENTS_SAGA = "GET_STUDENTS_SAGA"
export const ADD_DATA_SOCKET_SAGA = 'ADD_DATA_SOCKET_SAGA'



export const addOne = () =>({
    type: ADD_ONE

})

export const addX = (x) => ({
    type: ADD_X,
    payload: x
})

export const getStudentsSaga = () => ({
    type: GET_STUDENTS_SAGA
})

export const allStudents = students => ({
    type: GET_STUDENTS,
    payload: students
})

export const getStudentsThunk = () => async dispatch => {
    const students = await fromAPI.getStudents()
    dispatch(allStudents(students))
}

export const getStudents = () => async dispatch => {
    const students = await fromAPI.getStudents();
    dispatch(allStudents(students));
}

export const addData = (data) => ({
    type: ADD_DATA_SOCKET_SAGA,
    payload: data
})
