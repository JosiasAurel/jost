import React, { FunctionComponent } from "react";

import { AppProps } from "next/app";
import Head from "next/head";


import "tailwindcss/tailwind.css"

const App: FunctionComponent<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.2/dist/tailwind.min.css" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default App;