import React, { FunctionComponent } from "react";

// import custom components
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";
import Head from "next/head";

const Index: FunctionComponent = (): JSX.Element => {
    return (
        <article>
            <Head> 
<title>Free, Open Source and Minimal analytics service for your web apps.</title>
<meta name="title" content="Free, Open Source and Minimal analytics service for your web apps."/>
<meta name="description" content=""/>


<meta property="og:type" content="website"/>
<meta property="og:url" content="https://jost.vercel.app/"/>
<meta property="og:title" content="Free, Open Source and Minimal analytics service for your web apps."/>
<meta property="og:description" content="A free and open mini analytics service"/>
<meta property="og:image" content="https://i.ibb.co/rvsnwx3/jostOG.png"/>


<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://jost.vercel.app/"/>
<meta property="twitter:title" content="Free, Open Source and Minimal analytics service for your web apps."/>
<meta property="twitter:description" content="A free and open mini analytics service"/>
<meta property="twitter:image" content="https://i.ibb.co/rvsnwx3/jostOG.png"></meta>
            </Head>
            <Header pageType="any" />
            <main className="my-20 sm:my-36 h-screen w-screen">
                <h1 className="m-12 text-3xl sm:text-6xl font-bold text-center">
                    Free, Open Source and Minimal analytics service for your web apps.
                </h1>

                <p className="m-6 text-2xl text-center text-gray-600">
                    <em>Jost Analytics</em> helps you track and measure your website or web app's traffic. <br />
                    It is free and open, modify and customize it at your wish.
                </p>

                <section className="my-20 flex justify-center text-white">
                <Link href="/register">
                    <button className=" w-11/12 sm:w-52 text-center font-semibold p-4 bg-indigo-500 rounded-lg ring-4">
                        Start Measuring
                    </button>
                </Link>
            </section>
            </main>

            <section className=" -my-48">
                <h2 className="text-5xl font-semibold m-4 text-center">
                    Features
                </h2>

                <div className="flex justify-center">
                    <div className="sm:flex-row flex flex-col"> {/* grid grid-cols-2 grid-rows-2 */}
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
                <h2 className="font-semibold text-5xl text-center">Do you like this project ?</h2>
                <div className="flex items-center justify-center my-12">
                    <a href="https://www.buymeacoffee.com/rocketstellar"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=🍕&slug=rocketstellar&button_colour=5F7FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00" /></a>
                </div>
            </section>

        <footer className="flex justify-evenly text-gray-600 ">
            <a href="https://github.com/JosiasAurel/jost">GitHub</a>
            <a href="https://www.buymeacoffee.com/rocketstellar">Sponsor</a>
        </footer>
        </article>
    )
}

export default Index;