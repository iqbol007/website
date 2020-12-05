import Axios from "axios"

const agent = Axios.create({
    baseURL: process.env.REACT_APP_PROD_API,
})
export default agent
