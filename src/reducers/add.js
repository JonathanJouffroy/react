import {ADD_ONE, ADD_X} from '../actions'

let initialState = {
    value:0
}

const valuesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ONE:
            return Object.assign({}, state, {value: state.value+1})
        case ADD_X:
            return{...state, value: state.value + action.payload}
        default:
            return state
    }
}

export default valuesReducer