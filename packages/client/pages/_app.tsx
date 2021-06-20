import React, { FunctionComponent } from "react";

import { AppProps } from "next/app";

import "../global.css";

/* // import tailwind
import "tailwindcss/tailwind.css" */

const App: FunctionComponent<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <Component {...pageProps} />
    )
}

export default App;