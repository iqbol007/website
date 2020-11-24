import { MessageActions } from "./interface"



export const messageGetAll = (message: any, users: any) => {
    return { type: MessageActions.GET_ALL_MESSAGES, payload: { message, users } }
}
export const messageCreate = (message: any) => {
    return { type: MessageActions.CREATE_MESSAGE, payload: { message } }
}
export const messageRemove = (id: any) => {
    return { type: MessageActions.REMOVE_MESSAGE, payload: { id } }
}
export const messageEdit = (message: any) => {
    return { type: MessageActions.EDIT_MESSAGE, payload: { message } }
}
export const newUserOnline = (user: any) => {
    return { type: MessageActions.NEW_USER_ONLINE, payload: { user } }
}
export const userAreDisconnected = (id: any) => {
    return { type: MessageActions.USER_ARE_DISCONNECT, payload: { id } }
}