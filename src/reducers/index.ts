import { combineReducers } from "redux";
import { IUsersInitialState, usersReducer } from "./Users";
export interface IRootState {
    readonly users: IUsersInitialState;
}

export const rootReducer = () =>
    combineReducers({
        users: usersReducer
    });