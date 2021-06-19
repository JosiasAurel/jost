import React, { FunctionComponent } from "react";

import { Card } from "@geist-ui/react";
import Link from "next/link";

interface AppInfo {
    name: string,
    description: string   
    url: string,
    id: string
}

const App: FunctionComponent<AppInfo> = ({ name, description, url, id }): JSX.Element => {
    return (
        <div className="max-w-xs m-4">
            <Link href={`/dashboard/${id}`}>
                <div className="text-center">
                    <Card hoverable>
                    <h2 className="font-bold"> {name} </h2>
                    <p> {description} </p>
                    <a className="shadow-md p-1 rounded bg-indigo-600 text-white" href={url}> {url} </a>
                </Card>
                </div>
            </Link>
        </div>
    )
}

export default App;