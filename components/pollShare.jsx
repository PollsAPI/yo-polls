import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import { getTwitterLink, getWhatsappLink } from '../utils/share'
const buildShareText = poll => {
    const host = window.location.origin
    const optionsText = poll.options.map(option => `- *${option.text}*`).join('\n')
    const pollLink = `${host}/poll/${poll.id}`
    return `${poll.question}\n\n${optionsText}\n\nVote here 👇\n${pollLink}`
}
export const SharePoll = ({ poll }) => {
    const [copied, setCopied] = useState(false)
    if (!poll) return null
    const text = buildShareText(poll)
    return (
        <div id={'share-poll'} className={'bg-o-warning p-4 rounded'}>
            <h2 className={'text-center font-weight-bold'}>Share poll</h2>
            <div className={'mt-5'}>
                <p className={'h4 small mb-2 text-center'}>Copy/Paste the content to any messaging app</p>
                <pre className={'bg-white w-100 border border-success flex-wrap text-muted p-3'}>{text}</pre>
                <div className={'d-flex'}>
                    <CopyToClipboard text={text} onCopy={() => console.log('Copied!')}>
                        <Button onClick={() => setCopied(true)} size={'sm'} variant={'dark'} className={'shadow'}>
                            Copy to clipboard <i className={'fas fa-copy ml-1'} />
                        </Button>
                    </CopyToClipboard>
                    <div className={'ml-auto'}>
                        <a target={'_blank'} href={getWhatsappLink(text)} className={'btn btn-success shadow mx-1'}>
                            <i className={'fab fa-whatsapp'} />
                        </a>
                        <a target={'_blank'} href={getTwitterLink(text)} className={'btn btn-info shadow mx-1'}>
                            <i className={'fab fa-twitter'} />
                        </a>
                    </div>
                </div>
                <Toast show={copied} onClose={() => setCopied(false)} autohide={true} className={'mw-100 mt-3'}>
                    <Toast.Header>
                        <strong className="mr-auto">Copied !!</strong>
                    </Toast.Header>
                </Toast>
            </div>
        </div>
    )
}
