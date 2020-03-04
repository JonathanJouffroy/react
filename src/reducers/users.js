import * as fromActions from '../actions'

let initialState = {
    users: []
}


const UsersReducer = (state = initialState, action) => {
    switch(action.type){
        case fromActions.GET_USERS:
            return {...state, users: [...action.payload]}
        default:
            return state
    }
}

export default UsersReducer
