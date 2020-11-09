import '../styles/bootstrap.min.css'
import Head from 'next/head'
import React from "react";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp