import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
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
            </Head>
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
