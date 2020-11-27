import { Reducer } from "react"
import { MessageActions } from "../../actions/Messages/interface"
import { IUser } from "../../actions/Users/interfaces"

export interface IMessage {
    id: string | number
    text_content: string
    reciever_id: string | number
    owner_fullname: string
}
export interface IInitialMessagesState {
    allMessages: Array<IMessage>
    edit_content: string
    content: string,
    activeUsers: IUser[],
    status: string | null
}
const initialMessageState: IInitialMessagesState = {
    allMessages: [], edit_content: '', content: '', activeUsers: [], status: null
}
export const messagesReducer: Reducer<IInitialMessagesState, any> =
    (state = initialMessageState, action: any) => {
        switch (action.type) {
            case MessageActions.GET_ALL_MESSAGES: {
                const { message } = action.payload
                return {
                    ...state,
                    allMessages: [...message],
                }
            }
            case MessageActions.REMOVE_MESSAGE: {
                const { id } = action.payload
                return {
                    ...state,
                    allMessages: [...state.allMessages].filter(o => o.id !== id)
                }
            }
            case MessageActions.EDIT_MESSAGE: {
                const { message } = action.payload
                return {
                    ...state,
                    allMessages: [{ ...message },
                    ...state.allMessages.filter(o => o.id !== message.id)]
                }
            }
            case MessageActions.CREATE_MESSAGE: {
                const { message } = action.payload
                return { ...state, allMessages: [...state.allMessages, { ...message }] }
            }
            case MessageActions.CHANGE_WS_STATUS: {
                return { ...state, status: action.payload }
            }
            case MessageActions.NEW_USER_ONLINE:
                {
                    const { users } = action.payload
                    return { ...state, activeUsers: [...users] }
                }
            case MessageActions.USER_ARE_DISCONNECT: {
                const { user } = action.payload
                return { ...state, activeUsers: [...state.activeUsers.filter(o => o.id !== user.id)] }
            }
            default:
                return state
        }
    } 