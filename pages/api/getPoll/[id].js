import { sendRequest } from '../../../utils/pollsApiHelper'

/**
 * Get Poll by Id
 * API Endpoint to get the Poll from PollsAPI
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async (req, res) => {
    if (req.method === 'GET') {
        const {
            data: { statusCode },
            data: pollsData,
        } = await sendRequest('get', `/get/poll/${req.query.id}`)
        return res.status(statusCode).json(pollsData)
    }
    return res.status(500).json({
        error: true,
        statusCode: 500,
        message: 'Server Error',
    })
}
