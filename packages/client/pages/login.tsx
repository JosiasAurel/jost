import React, { FunctionComponent, useEffect, useState } from "react";

// import custom componenets
import Header from "../components/Header";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";

// server address
const serverAddr: string = "https://jost.deta.dev"; //`${process.env.JOST_SERVER}`;
const SECRET_KEY: string = `${process.env.SECRET}`;

const LoginPage: FunctionComponent = (): JSX.Element => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // instance a router
    const router = useRouter();

    function inputChangeHandler(event, handler) {
        handler(event.target.value);
    }

    async function submitRegistrationForm(event: any) {
        event.preventDefault(); // prevent page reload when data submitted

        const newUserInfo = {
            name,
            email
        }

        let newUserRes = await fetch(`${serverAddr}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserInfo)
        });

        let newUserData = await newUserRes.json();
        console.log(newUserData)
        localStorage.setItem("user", newUserData.token);
        // console.log(newUserData);
        router.replace("/dashboard");
    }

    return (
        <div>
            <Header pageType="any" />
            <div className="flex justify-center my-24 w-screen">
                <div className="w-full mx-4 flex justify-center py-20 shadow-md max-w-lg rounded text-cente p-2">
                <form onSubmit={e => submitRegistrationForm(e)} className="flex flex-col ">
                    <h2 className="text-center font-bold">Jost Login</h2>
                <input onChange={event => inputChangeHandler(event, setName)} type="text" placeholder="name" className="border-indigo-600 text-center my-3 p-2 w-full" value={name} />
                <input onChange={event => inputChangeHandler(event, setEmail)} type="text" placeholder="email" className="border-indigo-600 text-center my-3 p-2 w-full" value={email} />
                <input onChange={event => inputChangeHandler(event, setPassword)} type="password" placeholder="password" className="border-indigo-600 text-center my-3 p-2 w-full" value={password} />
                <button className="bg-blue-600 text-white p-2 rounded">
                    LogIn
                </button>
              <p className="text-center">Already have an account ? <Link href="/login"> <a>LogIn</a> </Link> </p>
            </form>
            </div>
            </div>
        </div>
    )
}

export default LoginPage;
