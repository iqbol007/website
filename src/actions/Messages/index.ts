import { MessageActionTypes } from "./interface"

export const messageIncome = (message: any) => {
    return { type: MessageActionTypes.MESSAGE_INCOME, payload: { message } }
}
export const messageSent = (message: any) => {
    return { type: MessageActionTypes.MESSAGE_SENT, payload: { message } }
}
export const messageRemove = (message: any) => {
    return { type: MessageActionTypes.MESSAGE_REMOVE, payload: { message } }
}
export const messageEdit = (message: any) => {
    return { type: MessageActionTypes.MESSAGE_EDIT, payload: { message } }
}