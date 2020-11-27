import { combineReducers } from "redux"
import { IInitialMessagesState, messagesReducer } from "./Messages"
import { IinitialPostsState, postsReducer } from "./Posts"
import { IUsersInitialState, usersReducer } from "./Users"
import { IWSinitialState, wsReducer } from "./Websocket"
export interface IRootState {
    users: IUsersInitialState,
    messages: IInitialMessagesState,
    websocketState: IWSinitialState,
    posts: IinitialPostsState
}

export const rootReducer = () =>
    combineReducers({
        messages: messagesReducer,
        users: usersReducer,
        websocketState: wsReducer,
        posts: postsReducer
    })