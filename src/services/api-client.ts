import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '5f56cb8ff77a48cd859ed78bae0b4130'
    }
})
