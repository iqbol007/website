
export enum UserActionsTypes {
    AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST',
    AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS',
    AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE',
    GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST',
    GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS',
    GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE',
    UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
    UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
    UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE',
    GET_USER_BY_ID_REQUEST = 'GET_USER_BY_ID_REQUEST',
    GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS',
    GET_USER_BY_ID_FAILURE = 'GET_USER_BY_ID_FAILURE',
    CREATE_USER_REQUEST = 'CREATE_USER_REQUEST',
    CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'
}

export interface IUser {
    age: number
    first_name: string
    last_name: string
    salary: number
}
export interface IAuthRequest {
    type: UserActionsTypes.AUTHENTICATE_REQUEST, payload: null
}
export interface IAuthSuccess {
    type: UserActionsTypes.AUTHENTICATE_SUCCESS, payload: { user: IUser }
}
export interface IAuthFailure {
    type: UserActionsTypes.AUTHENTICATE_FAILURE, payload: { error: Error | string | null }
}
export interface ICreateUserRequest {
    type: UserActionsTypes.CREATE_USER_REQUEST, payload: null
}
export interface ICreateUserSuccess {
    type: UserActionsTypes.CREATE_USER_SUCCESS, payload: IUser
}
export interface ICreateUserFailure {
    type: UserActionsTypes.CREATE_USER_FAILURE, payload: { error: Error | string | null }
}
export interface IUpdateUserRequest {
    type: UserActionsTypes.UPDATE_USER_REQUEST, payload: null
}
export interface IUpdateUserSuccess {
    type: UserActionsTypes.UPDATE_USER_SUCCESS, payload: IUser
}
export interface IUpdateUserFailure {
    type: UserActionsTypes.UPDATE_USER_FAILURE, payload: { error: Error | string | null }
}
export interface IGetUserByIdRequest {
    type: UserActionsTypes.GET_USER_BY_ID_REQUEST, payload: null
}
export interface IGetUserByIdSuccess {
    type: UserActionsTypes.GET_USER_BY_ID_SUCCESS, payload: IUser
}
export interface IGetUserByIdFailure {
    type: UserActionsTypes.GET_USER_BY_ID_FAILURE, payload: { error: Error | null | string }
}
export interface IGetAllUsersRequest {
    type: UserActionsTypes.GET_ALL_USERS_REQUEST, payload: null
}
export interface IGetAllUsersSuccess {
    type: UserActionsTypes.GET_ALL_USERS_SUCCESS, payload: { users: Array<IUser> }
}
export interface IGetAllUsersFailure {
    type: UserActionsTypes.GET_ALL_USERS_FAILURE, payload: { error: Error | string | null }
}

export type IUserActions =
    IAuthFailure |
    IAuthRequest |
    IAuthSuccess |
    ICreateUserRequest |
    ICreateUserSuccess |
    ICreateUserFailure |
    IUpdateUserRequest |
    IUpdateUserSuccess |
    IUpdateUserFailure |
    IGetAllUsersRequest |
    IGetAllUsersSuccess |
    IGetAllUsersFailure |
    IGetUserByIdRequest |
    IGetUserByIdSuccess |
    IGetUserByIdFailure;