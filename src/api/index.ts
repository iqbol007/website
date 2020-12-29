import Axios from "axios"
import { apiRoutes } from "./routes"

const agent = Axios.create({
    baseURL: apiRoutes,
})
export default agent
