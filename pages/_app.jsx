import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import React from 'react'
import Image from 'next/image'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../utils/seo'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...SEO}>
                <link rel="icon" href="/favicon.ico" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link
                    rel="preload"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                    crossOrigin="anonymous"
                />
            </DefaultSeo>
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
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    )
}

export default MyApp
