import { combineReducers } from 'redux'
import valuesReducer  from './add'
import usersReducer  from './users'
import productsReducer from './products'
//import socketReducer from './socket'
import ordersReducer from './orders'

const appReducer = combineReducers({
    valuesReducer,
    usersReducer,
    productsReducer,
    //socketReducer,
    ordersReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
