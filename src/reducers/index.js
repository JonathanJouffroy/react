import { combineReducers } from 'redux'
import valuesReducer  from './add'
import studentsReducer from './students'
import socketReducer from './socket'

const appReducer = combineReducers({
    valuesReducer,
    studentsReducer,
    socketReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
