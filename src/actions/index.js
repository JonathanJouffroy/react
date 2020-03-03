import * as fromAPI from '../api';

export const ADD_ONE = "ADD_ONE"
export const ADD_X = "ADD_X"
export const GET_STUDENTS = "GET_STUDENTS"



export const addOne = () =>({
    type: ADD_ONE

})

export const addX = (x) => ({
    type: ADD_X,
    payload: x
})

export const allStudents = students => ({
    type: GET_STUDENTS,
    payload: students
})

export const getStudents = () => async dispatch => {
    const students = await fromAPI.getStudents();
    dispatch(allStudents(students));
}
