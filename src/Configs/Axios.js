import axios from 'axios'
const AxiosConfig = axios.create({
    baseURL: 'https://gumistore.herokuapp.com/api'
})
export default AxiosConfig