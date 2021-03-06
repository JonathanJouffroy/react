import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
//import thunk from 'redux-thunk'
import { loadState } from './localStorage'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'

const persistedStore = loadState()
export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export default createStore(
    rootReducer,
    persistedStore,
    applyMiddleware(sagaMiddleware, routerMiddleware(history), logger)
)

sagaMiddleware.run(rootSaga)


