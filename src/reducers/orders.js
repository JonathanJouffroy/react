import * as fromActions from '../actions'

let initialState = {
    orders: []
}


const OrdersReducer = (state = initialState, action) => {
    switch(action.type){
        case fromActions.GET_ORDERS:
            return {...state, orders: [...action.payload]}
        default:
            return state
    }
}

export default OrdersReducer