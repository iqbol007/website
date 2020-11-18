
import { AxiosResponse } from "axios";

import { Dispatch } from "react";
import agent from "../../api";
import { tokenToStorage } from "../../utils";
import {
    IAuthRequest,
    UserActionsTypes,
    IAuthSuccess,
    IUser,
    IAuthFailure,
    IUserActions,
    ICreateUserRequest,
    ICreateUserSuccess,
    ICreateUserFailure,
    IUpdateUserFailure,
    IUpdateUserRequest,
    IUpdateUserSuccess,
    IGetUserByIdRequest,
    IGetUserByIdSuccess,
    IGetUserByIdFailure,
    IGetAllUsersRequest,
    IGetAllUsersSuccess,
    IGetAllUsersFailure
} from "./interfaces";

interface IAuthResponse {
    token: string
}
interface ICreateUserResponse {
    user: IUser
}
export interface ITokenDecode {
    user: IUser
    iat: number,
    exp: number
}


const authRequest = (): IAuthRequest => {
    return { type: UserActionsTypes.AUTHENTICATE_REQUEST, payload: null }
}
const authSuccess = (user: IUser): IAuthSuccess => {
    return { type: UserActionsTypes.AUTHENTICATE_SUCCESS, payload: { user } }
}
const authFailure = (error: Error | null | string): IAuthFailure => {
    return { type: UserActionsTypes.AUTHENTICATE_FAILURE, payload: { error } }
}
export const authenticate =
    (login: string, password: string) =>
        async (dispatch: Dispatch<IUserActions>) => {
            try {
                dispatch(authRequest())
                const response: AxiosResponse<IAuthResponse>
                    = await agent
                        .post('/users/authenticate', { login, password });
                const decoded = tokenToStorage(response.data.token);
                dispatch(authSuccess(decoded.user))
            } catch (error) {
                dispatch(authFailure(error))
            }
        }

const createUserRequest = (): ICreateUserRequest => {
    return { type: UserActionsTypes.CREATE_USER_REQUEST, payload: null }
}

const createUserSuccess = (user: IUser): ICreateUserSuccess => {
    return { type: UserActionsTypes.CREATE_USER_SUCCESS, payload: user }
}

const createUserFailure = (error: Error | string | null): ICreateUserFailure => {
    return { type: UserActionsTypes.CREATE_USER_FAILURE, payload: { error } }
}

export const createUser = (
    login: string,
    password: string,
    first_name: string | undefined = undefined,
    last_name: string | undefined = undefined,
    age: number | undefined = undefined,
    salary: number | undefined = undefined) =>
    async (dispatch: Dispatch<IUserActions>) => {
        const params = {
            login,
            password,
            first_name,
            last_name,
            age, salary
        };
        const parsed = Object
            .entries(params)
            .reduce((acc: any, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = value;
                    return acc;
                } else {
                    return acc;
                }
            }, {});
        try {

            dispatch(createUserRequest())
            const response: AxiosResponse<ICreateUserResponse>
                = await agent
                    .post('/users/createUser', { ...parsed });

            dispatch(createUserSuccess(response.data.user))
        } catch (error) {
            dispatch(createUserFailure(error))
        }
    }
const updateUserReuquest = (): IUpdateUserRequest => {
    return { type: UserActionsTypes.UPDATE_USER_REQUEST, payload: null }
}
const updateUserSuccess = (user: IUser): IUpdateUserSuccess => {
    return { type: UserActionsTypes.UPDATE_USER_SUCCESS, payload: user }
}
const updateUserFailure = (error: Error | string | null): IUpdateUserFailure => {
    return { type: UserActionsTypes.UPDATE_USER_FAILURE, payload: { error } }
}
export const updateUser = (
    login: string,
    password: string,
    first_name: string | undefined = undefined,
    last_name: string | undefined = undefined,
    age: number | undefined = undefined,
    salary: number | undefined = undefined) =>
    async (dispatch: Dispatch<IUserActions>) => {
        const params = {
            login,
            password,
            first_name,
            last_name,
            age, salary
        };
        const parsed = Object
            .entries(params)
            .reduce((acc: any, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = value;
                    return acc;
                } else {
                    return acc;
                }
            }, {});
        try {

            dispatch(updateUserReuquest())
            const response: AxiosResponse<ICreateUserResponse>
                = await agent
                    .post('/users/update', { ...parsed });

            dispatch(updateUserSuccess(response.data.user))
        } catch (error) {
            dispatch(updateUserFailure(error))
        }
    }
const getUserByIdRequest = (): IGetUserByIdRequest => {
    return { type: UserActionsTypes.GET_USER_BY_ID_REQUEST, payload: null }
}
const getUserByIdSuccess = (user: IUser): IGetUserByIdSuccess => {
    return { type: UserActionsTypes.GET_USER_BY_ID_SUCCESS, payload: user }
}
const getUserByIdFailure = (error: Error | null | string): IGetUserByIdFailure => {
    return { type: UserActionsTypes.GET_USER_BY_ID_FAILURE, payload: { error } }
}
export const getUserById = (id: number | string) => async (dispatch: Dispatch<IUserActions>) => {
    try {
        dispatch(getUserByIdRequest())
        const response = await agent.get(`/users/userById?id=${id}`);
        dispatch(getUserByIdSuccess(response.data))
    } catch (error) {
        dispatch(getUserByIdFailure(error))
    }
}
const getAllUsersRequest = (): IGetAllUsersRequest => {
    return { type: UserActionsTypes.GET_ALL_USERS_REQUEST, payload: null }
}
const getAllUsersSuccess = (users: IUser[]): IGetAllUsersSuccess => {
    return { type: UserActionsTypes.GET_ALL_USERS_SUCCESS, payload: { users } }
}
const getAllUsersFailure = (error: Error | null | string): IGetAllUsersFailure => {
    return { type: UserActionsTypes.GET_ALL_USERS_FAILURE, payload: { error } }
}
interface IGetAllUsersResponse {
    users: IUser[]
}
export const getAllUsers = () => async (dispatch: Dispatch<IUserActions>) => {
    try {
        dispatch(getAllUsersRequest())
        const response: AxiosResponse<IGetAllUsersResponse> = await agent.get('/users/all')
        dispatch(getAllUsersSuccess(response.data.users))
    } catch (error) {
        dispatch(getAllUsersFailure(error))
    }
}