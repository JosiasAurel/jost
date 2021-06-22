import React, { FunctionComponent, useEffect, useState } from "react";

// import custom componenets
import Header from "../components/Header";

import { useRouter } from "next/dist/client/router";

// server address
const serverAddr: string = `${process.env.SERVER}`;
const SECRET_KEY: string = `${process.env.SECRET}`;

const RegisterPage: FunctionComponent = (): JSX.Element => {
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
            password,
            email
        }

        let newUserRes = await fetch(`${serverAddr}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserInfo)
        });

        let newUserData = await newUserRes.json();
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
                    <h2 className="text-center font-bold">Jost Registration</h2>
                <input onChange={event => inputChangeHandler(event, setName)} type="text" placeholder="name" className="border-indigo-600 text-center my-3 p-2 w-full" value={name} />
                <input onChange={event => inputChangeHandler(event, setEmail)} type="text" placeholder="email" className="border-indigo-600 text-center my-3 p-2 w-full" value={email} />
                <input onChange={event => inputChangeHandler(event, setPassword)} type="password" placeholder="password" className="border-indigo-600 text-center my-3 p-2 w-full" value={password} />
                <button className="bg-blue-600 text-white p-2 rounded">
                    Register
                </button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default RegisterPage;