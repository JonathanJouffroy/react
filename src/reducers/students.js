import * as fromActions from '../actions';

let initialState = {
    students: []
}

const StudentsReducer = (state = initialState, action) => {
    switch(action.type){
        case fromActions.GET_STUDENTS:
            return {...state, students:[...action.payload]}
        default:
            return state;
    }
}

export default StudentsReducer