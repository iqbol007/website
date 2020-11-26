import { Reducer } from "react"
import { IwsActionS, WebSocketStates } from "../../actions/Websocket/interfaces"

export interface IWSinitialState {
    wsState: string
}
export const initialWsState: IWSinitialState = {
    wsState: ''
}
export const wsReducer: Reducer<IWSinitialState, IwsActionS> = (state = initialWsState, action: IwsActionS) => {
    switch (action.type) {
        case WebSocketStates.CONNECTED:
            return { ...state, wsState: WebSocketStates.CONNECTED }
        case WebSocketStates.CONNECTING:
            return { ...state, wsState: WebSocketStates.CONNECTING }
        case WebSocketStates.CONNECTION_ERROR:
            return { ...state, wsState: WebSocketStates.CONNECTION_ERROR }
        default:
            return state
    }
}