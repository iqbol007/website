import { useHistory } from "react-router-dom"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "../reducers"
import { createHashHistory } from 'history'
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createHashHistory()
export const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(thunk))
)