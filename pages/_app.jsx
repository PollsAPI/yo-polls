import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import Image from 'next/image'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../utils/seo'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <div className={'border-top border-large border-success'}>
                <div className={'container'}>
                    <h1 className={'display-4 font-weight-bolder my-3 text-success'}>
                        <div className={'d-flex align-items-center justify-content-center mx-auto'}>
                            <Image src={'/yo.png'} priority={true} width={100} height={100} /> Yo! Polls
                        </div>
                    </h1>
                    <h2 className={'h5 font-weight-light text-center w-75 mx-auto'}>
                        Send polls on WhatsApp, Messenger, Twitter, iMessage, SMS or any other way of text message 😃
                    </h2>
                    <div className="d-flex text-center">
                        <a
                            href="https://github.com/PollsAPI/yo-polls"
                            className={'mx-auto btn btn-sm btn-dark mt-3  font-weight-bold align-items-center'}
                        >
                            <img src={'/github.svg'} width={20} alt={'github'} className={'mr-2'} />
                            Get it on Github
                        </a>
                    </div>
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    )
}

export default MyApp
