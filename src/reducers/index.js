import { combineReducers } from 'redux'
import valuesReducer  from './add'
import usersReducer  from './users'
import productsReducer from './products'

const appReducer = combineReducers({
    valuesReducer,
    usersReducer,
    productsReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
