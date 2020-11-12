import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Card } from 'react-bootstrap'
import { CreatePollForm } from '../components/createForm'
import { Attribution } from '../components/attribution'
import { callCreatePoll } from '../utils/connector'
import { SharePoll } from '../components/pollShare'

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [poll, setPoll] = useState(null)
    const router = useRouter()
    const createPoll = async data => {
        setLoading(true)
        setError(null)
        callCreatePoll(data)
            .then(({ data }) => {
                setPoll(data)
                router.replace('/#share-poll')
            })
            .catch(e => setError(e.message))
            .finally(() => setLoading(false))
    }
    return (
        <>
            <div className={'d-flex justify-content-center'}>
                <div className={'my-5 py-3 col-md-6'}>
                    <p className={'text-center'}>Easily create and share polls on message.</p>
                    <Card className={'shadow'} bg={'white'}>
                        <Card.Body>
                            <CreatePollForm
                                key={poll?.id || 'new'}
                                submit={createPoll}
                                loading={loading}
                                serverError={error}
                            />
                        </Card.Body>
                    </Card>
                    <Attribution />
                    <hr />
                    <div className={'mt-5 d-flex flex-column'}>
                        <SharePoll poll={poll} />
                    </div>
                </div>
            </div>
        </>
    )
}
