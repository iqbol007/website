import { Reducer } from "react";
import { MessageActions } from "../../actions/Messages/interface";
import { IUser } from "../../actions/Users/interfaces";

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
}
const initialMessageState: IInitialMessagesState = {
    allMessages: [], edit_content: '', content: '', activeUsers: []
}
export const messagesReducer: Reducer<IInitialMessagesState, any> =
    (state = initialMessageState, action: any) => {
        switch (action.type) {
            case MessageActions.GET_ALL_MESSAGES: {
                const { message, users } = action.payload;
                return {
                    ...state,
                    allMessages: [...state.allMessages, ...message],
                    activeUsers: [...state.activeUsers, ...users]
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
                const { message } = action.payload;
                return {
                    ...state,
                    allMessages: [{ ...message }, ...state.allMessages.filter(o => o.id !== message.id)]
                }
            }
            case MessageActions.CREATE_MESSAGE: {
                const { message } = action.payload;
                return { ...state, allMessages: [...state.allMessages, { ...message }] }
            }
            default:
                return state
        }
    } 