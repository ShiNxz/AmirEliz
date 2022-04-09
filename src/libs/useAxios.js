import axios from 'axios'
import config from '../config'

const useAxios = async (route, method = 'GET', data = {}) => {
    method = method || 'GET'

    try {
        const fetch = await axios({
            method,
            url: route.startsWith('http') ? route : `${config.axios.baseURI}/${route}`,
            headers: config.axios.headers,
            data
        })

        return { success: true, status: fetch.status, data: fetch.data }

    } catch (error) {
        return { success: false, error }
    }
}

export default useAxios