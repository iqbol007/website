import * as jwt from "jsonwebtoken";
import { ITokenDecode } from "../actions/Users";
export const getAccessToken = () => {
    const token = localStorage.getItem('token')
    return token as string
}
export const tokenToStorage = (token: string) => {
    localStorage.setItem('token', token)
    const decoded = jwt.decode(token)
    return decoded as ITokenDecode
}