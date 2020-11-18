import Axios from "axios";
import { getAccessToken } from "../utils";


const token = getAccessToken();
const agent = Axios.create({
    baseURL: 'http://localhost:9999/api',
    headers: token ? {
        'Authorization': `Bearer ${token}`
    } : {}

});
export default agent