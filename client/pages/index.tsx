import React, { FunctionComponent } from "react";

// import custom components
import Header from "../components/Header";

const Index: FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Header />
            <main>
                <h1>Hello World from Jost</h1>
            </main>
        </div>
    )
}

export default Index;