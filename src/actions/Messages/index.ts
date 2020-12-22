import { IUser } from "../Users/interfaces"
import { MessageActions } from "./interface"


export const messageGetAll = (message: any) => {
    return { type: MessageActions.GET_ALL_MESSAGES, payload: { message } }
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
export const getOnlineUsers = (users: any) => {
    return { type: MessageActions.NEW_USER_ONLINE, payload: { users } }
}
export const userAreDisconnected = (user: any) => {
    return { type: MessageActions.USER_ARE_DISCONNECT, payload: { user: JSON.parse(user) } }
}
export const changeWSstatus = (status: string) => {
    return { type: MessageActions.CHANGE_WS_STATUS, payload: status }
}
export const typing = (whoTyping: IUser | null) => {
    return { type: MessageActions.TYPING, payload: { user: whoTyping } }
}
