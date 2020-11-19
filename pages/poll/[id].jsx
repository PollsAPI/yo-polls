import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Spinner, Alert, Button } from 'react-bootstrap'
import { Poll } from '../../components/poll'
import Link from 'next/link'
import { Attribution } from '../../components/attribution'
import { SharePoll } from '../../components/pollShare'
const ERROR_MESSAGE = 'Failed to fetch the poll. Please try again.'
const PollPage = ({ id }) => {
    const [loading, setLoading] = useState(true)
    const [poll, setPoll] = useState(null)
    const [error, setError] = useState(false)
    useEffect(() => {
        // Retrieve the poll from the ID in the URL path
        axios(`/api/getPoll/${id}`)
            .then(({ data: responseData }) => setPoll(responseData.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [])
    return (
        <>
            <div className={'d-flex justify-content-center'}>
                <div className={'my-4 py-3 col-md-6'}>
                    <Card className={'shadow'} bg={'white'}>
                        <Card.Body className={'mt-5'}>
                            {loading ? (
                                <div className={'text-center'}>
                                    <Spinner animation={'border'} />
                                    <p>Loading...</p>
                                </div>
                            ) : error ? (
                                <Alert variant={'danger'}>{ERROR_MESSAGE}</Alert>
                            ) : (
                                <Poll data={poll} />
                            )}
                        </Card.Body>
                    </Card>
                    <div className={'mt-4 text-center'}>
                        <Link href={'/'}>
                            <a href={'/'} className={'btn btn-dark font-weight-bold'}>
                                <i className={'fas fa-star text-warning shadow mr-2'} />
                                Create new poll
                            </a>
                        </Link>
                    </div>
                    <Attribution />
                    <hr />
                    <SharePoll poll={poll} />
                </div>
            </div>
        </>
    )
}
PollPage.getInitialProps = context => ({ ...context.query })

export default PollPage
