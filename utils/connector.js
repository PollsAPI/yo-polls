import axios from 'axios'

export const callCreatePoll = async data => {
    try {
        const response = await axios({
            method: 'POST',
            url: '/api/createPoll',
            data,
        })
        return response.data
    } catch ({ response }) {
        throw new Error(response?.data?.message || 'Unknown Error: Failed to create poll')
    }
}

export const addVote = data => {
    // No need to handle anything for this, it's just fire & forget
    return axios.post('/api/createVote', data).catch(console.error)
}
