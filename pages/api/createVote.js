import { sendRequest } from '../../utils/pollsApiHelper'

/**
 * Add Vote
 * Endpoint to create vote on an option
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async (req, res) => {
    if (req.method === 'POST') {
        const {
            data: { statusCode },
            data: voteData,
        } = await sendRequest('post', '/create/vote', req.body)
        return res.status(statusCode).json(voteData)
    }
    return res.status(500).json({
        error: true,
        statusCode: 500,
        message: 'Server Error',
    })
}
