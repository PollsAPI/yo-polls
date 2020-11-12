import axios from 'axios'
import { sendRequest } from '../../utils/pollsApiHelper'

/**
 * Create Poll
 * API Endpoint to create a poll with PollsAPI
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async (req, res) => {
    if (req.method === 'POST') {
        const {
            data: { statusCode },
            data: pollsData,
        } = await sendRequest('post', '/create/poll', req.body)
        return res.status(statusCode).json(pollsData)
    }
    return res.status(500).json({
        error: true,
        statusCode: 500,
        message: 'Server Error',
    })
}
