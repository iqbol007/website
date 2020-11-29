import { combineReducers } from "redux"
import { IInitialMessagesState, messagesReducer } from "./Messages"
import { IinitialPostsState, postsReducer } from "./Posts"
import { IUsersInitialState, usersReducer } from "./Users"
import { IWSinitialState, wsReducer } from "./Websocket"
import { connectRouter } from 'connected-react-router';

export interface IRootState {
    users: IUsersInitialState,
    messages: IInitialMessagesState,
    websocketState: IWSinitialState,
    posts: IinitialPostsState
}

export const rootReducer = (history: any) =>
    combineReducers({
        router:connectRouter(history)  ,
        messages: messagesReducer,
        users: usersReducer,
        websocketState: wsReducer,
        posts: postsReducer
    })