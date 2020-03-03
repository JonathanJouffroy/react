import { combineReducers } from 'redux'
import values  from './add'

const appReducer = combineReducers({
    values
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
