import { Reducer } from "react";
import { IUser, IUserActions, UserActionsTypes } from "../../actions/Users/interfaces"

interface IUsers {
    age: number
    first_name: string
    last_name: string
    salary: number,
    allUsers: IUser[],
    userById: IUser,
    loading: boolean,
    error: null | Error | string
}
const initialState: IUsers = {
    age: 0,
    first_name: '',
    last_name: '',
    salary: 0,
    allUsers: [],
    userById: {
        first_name: '',
        last_name: '',
        age: 0,
        salary: 0
    },
    loading: false,
    error: null,
}
export const usersReducer: Reducer<IUsers, any> = (state = initialState, action: IUserActions) => {
    switch (action.type) {
        case UserActionsTypes.AUTHENTICATE_REQUEST:
            return { ...state, loading: false }
        case UserActionsTypes.AUTHENTICATE_SUCCESS:
            const { user } = action.payload;
            return { ...state, ...user, loading: false }
        case UserActionsTypes.AUTHENTICATE_FAILURE:
            const { error } = action.payload
            return { ...state, error: error, loading: false }
        case UserActionsTypes.UPDATE_USER_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.UPDATE_USER_SUCCESS:
            return { ...state, ...action.payload, loading: false }
        case UserActionsTypes.UPDATE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        case UserActionsTypes.CREATE_USER_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.CREATE_USER_SUCCESS:
            return { ...state, loading: false }
        case UserActionsTypes.CREATE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        case UserActionsTypes.GET_USER_BY_ID_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.GET_USER_BY_ID_SUCCESS:
            return { ...state, loading: false, userById: action.payload }
        case UserActionsTypes.GET_USER_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        case UserActionsTypes.GET_ALL_USERS_REQUEST:
            return { ...state, loading: true }
        case UserActionsTypes.GET_ALL_USERS_SUCCESS:
            return { ...state, loading: false }
        case UserActionsTypes.GET_ALL_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        default:
            return state
    }
}