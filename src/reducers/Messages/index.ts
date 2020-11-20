import { Reducer } from "react";
import { MessageActionTypes } from "../../actions/Messages/interface";

export interface IMessage {
    id: string | number
    text_content: string
    reciever_id: string | number

}
export interface IInitialMessagesState {
    allMessages: Array<IMessage>
    edit_content: string
    content: string
}
const initialMessageState: IInitialMessagesState = {
    allMessages: [], edit_content: '', content: ''
}
export const messagesReducer: Reducer<IInitialMessagesState, any> =
    (state = initialMessageState, action: any) => {
        switch (action.type) {
            case MessageActionTypes.MESSAGE_INCOME:
                const { message } = action.payload
                return {
                    ...state,
                    allMessages: [...state.allMessages, ...message]
                }
            default:
                return state
        }
    } 