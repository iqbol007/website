export enum WebSocketStates {
    CONNECTING = 'CONNECTING',
    CONNECTED = 'CONNECTED',
    CONNECTION_ERROR = 'CONNECTION_ERROR'
}
export interface IwsConnecting { type: WebSocketStates.CONNECTING }
export interface IwsConnected { type: WebSocketStates.CONNECTED }
export interface IwsConnectionError { type: WebSocketStates.CONNECTION_ERROR }
export type IwsActionS = IwsConnected | IwsConnecting | IwsConnectionError