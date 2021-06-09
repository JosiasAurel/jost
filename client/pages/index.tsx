import React, { FunctionComponent } from "react";

// import custom components
import Header from "../components/Header";

const Index: FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Header />
            <main>
                <h1 className="m-12 text-5xl font-bold text-center">
                    Free, Open Source and Minimal analytics service for your web apps.
                </h1>

                <p className="m-6 text-3xl text-center">
                    <em>Jost Analytics</em> helps you track and measure your website or web app's traffic. <br />
                    It is free and open, modify and customize it at your wish.
                </p>
            </main>

            <section className="my-10 flex justify-center text-white">
                <button className="text-center font-semibold p-4 bg-indigo-500 rounded-lg">
                    Start Measuring
                </button>
            </section>
        </div>
    )
}

export default Index;