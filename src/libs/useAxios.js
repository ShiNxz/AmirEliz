import axios from 'axios'
import config from '../config'

const useAxios = async (route, method) => {
    method = method || 'GET'

    try {
        const fetch = await axios({
            method,
            url: `${config.axios.baseURI}/${route}`,
            headers: config.axios.headers
        })

        return { success: true, status: fetch.status, data: fetch.data }

    } catch (error) {
        return { success: false, error }
    }
}

export default useAxios