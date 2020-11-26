import { IwsActionS, WebSocketStates } from "./interfaces"

export const wsConnected = (): IwsActionS => {
    return { type: WebSocketStates.CONNECTED }
}
export const wsConnecting = (): IwsActionS => {
    return { type: WebSocketStates.CONNECTING }
}
export const wsConnectionError = (): IwsActionS => {
    return { type: WebSocketStates.CONNECTION_ERROR }
}