import axios from 'axios'
const API_BASE_URL = 'https://api.pollsapi.com/v1'
export const sendRequest = async (method, path, data) => {
    return axios({
        method,
        url: `${API_BASE_URL}/${path}`,
        data,
        headers: {
            'api-key': process.env.API_KEY,
            'content-type': 'application/json',
        },
    }).catch(({ response }) => {
        // Log the error and send it back
        console.error('createPoll Error', response.data)
        return response
    })
}
