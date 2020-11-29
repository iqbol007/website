import Axios from "axios"

const agent = Axios.create({
    baseURL: 'http://localhost:9999/api',
})
export default agent