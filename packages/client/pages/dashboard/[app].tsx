import React, { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header";

const serverAddr: string = "https://0wjb6h.deta.dev";
// const serverAddr: string = "http://localhost:8000";

/* interface AppPageProps {
    baseUrl: string
    description: string
    key: string
    name: string
    owner: string
} */

interface AppPageProps {
    app: any
}

const AppPage: FunctionComponent<AppPageProps> = ({ app }): JSX.Element => {
    const [App, setApp] = useState({
        name: app.name,
        description: app.description,
        baseUrl: app.baseUrl,
        key: app.key
    })

    useEffect(() => {
        fetch(`${serverAddr}/pages/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({base: App.baseUrl}),
        })
            .then(res => res.json()) 
            .then(data => console.log(data))
    })

    return (
        <div>
            <Header pageType="dashboard" appName={App.name} />

            <div>

            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const appId = ctx.query.app;
    const appDataRes = await fetch(`${serverAddr}/app/${appId}`);
    const appData = await appDataRes.json();
    console.log(appData)
    return { props: { app: appData } }
}

export default AppPage;