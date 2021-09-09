import axios from 'axios'

const api = axios.create({
    baseURL: 'http://api.icndb.com/jokes',
    params: {
        escape: "javascript"
    }
})

export default api