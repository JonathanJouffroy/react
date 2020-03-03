import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'
import logger from 'redux-logger'
import { loadState } from './localStorage'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'

const persistedStore = loadState()
export const history = createBrowserHistory()

export default createStore(
    rootReducer,
    persistedStore,
    applyMiddleware(routerMiddleware(history), logger)
)



