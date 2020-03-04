import * as FromActions from '../actions'

let initialState = {
    socket: []
}

const SocketReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FromActions.ADD_DATA_SOCKET_SAGA:
            return {...state, socket: [...state.socket,action.payload]}
        default:
            return state
    }
}

export default SocketReducer