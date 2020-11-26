import { combineReducers } from "redux"
import { IInitialMessagesState, messagesReducer } from "./Messages"
import { IUsersInitialState, usersReducer } from "./Users"
import { IWSinitialState, wsReducer } from "./Websocket"
export interface IRootState {
    users: IUsersInitialState,
    messages: IInitialMessagesState,
    websocketState: IWSinitialState
}

export const rootReducer = () =>
    combineReducers({
        messages: messagesReducer,
        users: usersReducer,
        websocketState: wsReducer
    })