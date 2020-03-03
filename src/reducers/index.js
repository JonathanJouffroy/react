import { combineReducers } from 'redux'
import valuesReducer  from './add'
import studentsReducer from './students'

const appReducer = combineReducers({
    valuesReducer,
    studentsReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
