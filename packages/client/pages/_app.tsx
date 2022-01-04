import React from "react";

import { AppProps } from "next/app";

const JostApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default JostApp;