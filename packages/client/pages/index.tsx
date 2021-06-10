import React, { FunctionComponent } from "react";

// import custom components
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";

const Index: FunctionComponent = (): JSX.Element => {
    return (
        <article>
            <Header />
            <main className="my-20 sm:my-36 h-screen w-screen">
                <h1 className="m-12 text-3xl sm:text-6xl font-bold text-center">
                    Free, Open Source and Minimal analytics service for your web apps.
                </h1>

                <p className="m-6 text-2xl text-center text-gray-600">
                    <em>Jost Analytics</em> helps you track and measure your website or web app's traffic. <br />
                    It is free and open, modify and customize it at your wish.
                </p>

                <section className="my-20 flex justify-center text-white">
                <button className=" w-11/12 sm:w-52 text-center font-semibold p-4 bg-indigo-500 rounded-lg ring-4">
                    Start Measuring
                </button>
            </section>
            </main>

            <section className=" -my-48">
                <h2 className="text-5xl font-semibold m-4 text-center">
                    Features
                </h2>

                <div className="flex justify-center">
                    <div className="flex flex-col sm:flex-row "> {/* grid grid-cols-2 grid-rows-2 */}
                    <FeatureCard 
                        title="Page Views" 
                        description="Track your web app page views." 
                        color="red"
                        rotate="6" 
                    />
                    <FeatureCard 
                        title="Know who is using your app" 
                        description="Jost serves to you information about the OS used by your visitors." 
                        color="blue" 
                        rotate="3"
                    />
                    <FeatureCard 
                        title="Measure your site total traffic" 
                        description="Get total monthly traffic for your website using Jost." 
                        color="purple" 
                        rotate="3"
                    />
                    <FeatureCard 
                        title="Helpful Charts" 
                        description="All your data, presented on beautiful charts." 
                        color="pink" 
                        rotate="3"
                    />
                    
                </div>
                </div>
            </section>

            <section className="my-52">
                <h2 className="font-semibold text-5xl text-center">Want to support the project ?</h2>

            </section>

        <footer className="flex justify-evenly text-gray-600 my-4">
            <a href="https://github.com/JosiasAurel/jost">GitHub</a>
            <a href="">Sponsor</a>
        </footer>
        </article>
    )
}

export default Index;