import { combineReducers } from "redux";
import { messagesReducer } from "./Messages";
import { IUsersInitialState, usersReducer } from "./Users";
export interface IRootState {
    readonly users: IUsersInitialState;
}

export const rootReducer = () =>
    combineReducers({
        messages: messagesReducer,
        users: usersReducer
    });