import React, { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header";
import App from "../../components/App";
import jwt from "jsonwebtoken";
import { Modal } from "@geist-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

// server address
const serverAddr: string = `${process.env.SERVER}`;
const SECRET_KEY: string = `${process.env.SECRET}`;


// interfaces
interface JostUser {
    name: string
    id: string
    iat: any
}


const DashboardIndex: FunctionComponent = (): JSX.Element => {

    // instance router
    const router = useRouter();
    const [user, setUser] = useState<any>({});
    const [isAuth, setIsAuth] = useState(false);
    const [d, setD] = useState("");
    
    useEffect(() => {
        let token: string = localStorage.getItem("user");

        try {
            let user_ = jwt.verify(token, SECRET_KEY);
            setUser(user_);
            console.log(user_);
            setIsAuth(true);
        } catch {
            setUser({});
            setIsAuth(false);
        }
        
        getUserApps();
        setD("d")    
    }, [d]);

    // user apps 
    const [apps, setApps] = useState([]);

    // modal and state
    const [open, setOpen] = useState(false);
    function modalCloseHandler() {
        setOpen(false);
    }

    // state of form elements in modal
    const [appName, setAppName] = useState("");
    const [appDescription, setAppDescription] = useState("");
    const [appBaseURL, setAppBaseURL] = useState("");

    // input change handler
    function inputChangeHandler(event, handler) {
        handler(event.target.value);
    }

    // fetch apps created by user
    async function getUserApps() {
        let appsRes = await fetch(`${serverAddr}/apps/${user.id}`);
        let appsData = await appsRes.json();
        console.log(appsData)
        setApps(appsData);
    }

    async function createApp() {

        // new app structure
        const newApp = {
            name: appName,
            description: appDescription,
            baseUrl: appBaseURL,
            owner: user.id
        }

        let appRes = await fetch(`${serverAddr}/app`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newApp)
        });
        let appData = await appRes.json();
        console.log(appData);

        // reload page
        router.reload();
    }

    if (!isAuth) {
        return (
            <div>
                <Header pageType="dashboard" userName="" />
                <h1 className="text-center text-4xl my-24">Not Authenticated</h1>
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                    <Link href="/register">
                    <h2 className="mx-4 hover:bg-blue-700 hover:text-white text-blue-500 p-2 rounded-md hover:shadow-dm">Register</h2>
                </Link>
                OR 
                <Link href="/login">
                    <h2 className="mx-4 hover:bg-blue-700 hover:text-white text-blue-500 p-2 rounded-md hover:shadow-dm">LogIn</h2>
                </Link>
                </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header pageType="dashboard" userName={user.name} appName="" />
            <div className="my-24">
                <h2 className="text-center">Your Apps</h2>
                <main>
                    
                    { apps !== [] ?
                    <div className="mx-8 sm:grid sm:gap-1 sm:grid-cols-4 flex flex-col justify-center items-center">
                        { apps.map(app => {
                            return (
                                <App id={app.key} key={app.key} name={app.name} description={app.description} url={app.baseUrl} />
                            )
                        }) }
                        
                    </div> :
                    <h2 className="text-center">No Apps Yet. Consider Creating One</h2>
                     }
                </main>
                <Modal open={open} onClose={modalCloseHandler}>
                    <Modal.Title> Create New App </Modal.Title>
                    <Modal.Content>
                        <form className="flex flex-col">
                            <input onChange={event => inputChangeHandler(event, setAppName)} value={appName}  type="text" placeholder="App Name" className="text-center my-3 p-2 w-full" />
                            <input onChange={event => inputChangeHandler(event, setAppDescription)} value={appDescription} type="text" placeholder="App Descripton" className="text-center my-3 p-2 w-full" />
                            <input onChange={event => inputChangeHandler(event, setAppBaseURL)} value={appBaseURL}  type="url" placeholder="App Base URL e.g https://jost.io" className="text-center my-3 p-2 w-full" />
                        </form>
                    </Modal.Content>
                    <Modal.Action onClick={() => createApp()}> Submit </Modal.Action>
                    <Modal.Action passive onClick={() => setOpen(false)}> Cancel </Modal.Action>
                </Modal>
                
                <button onClick={() => setOpen(true)} className="bg-indigo-500 text-white p-1 w-24 h-8 rounded m-4 fixed top-12">
                    New App
                </button>
            </div>
        </div>
    )
}

/* 
return (
        <div>
            <Header pageType="dashboard" userName={user.name} appName="" />
            <div className="my-24">
                <h2 className="text-center">Your Apps</h2>
                <main>
                    
                    { apps !== [] ?
                    <div className="mx-8 sm:grid sm:gap-1 sm:grid-cols-4 flex justify-center items-center">
                        { apps.map(app => {
                            return (
                                <App id={app.key} key={app.key} name={app.name} description={app.description} url={app.baseUrl} />
                            )
                        }) }
                        
                    </div> :
                    <h2 className="text-center">No Apps Yet. Consider Creating One</h2>
                     }
                </main>
                <Modal open={open} onClose={modalCloseHandler}>
                    <Modal.Title> Create New App </Modal.Title>
                    <Modal.Content>
                        <form className="flex flex-col">
                            <input onChange={event => inputChangeHandler(event, setAppName)} value={appName}  type="text" placeholder="App Name" className="text-center my-3 p-2 w-full" />
                            <input onChange={event => inputChangeHandler(event, setAppDescription)} value={appDescription} type="text" placeholder="App Descripton" className="text-center my-3 p-2 w-full" />
                            <input onChange={event => inputChangeHandler(event, setAppBaseURL)} value={appBaseURL}  type="url" placeholder="App Base URL e.g https://jost.io" className="text-center my-3 p-2 w-full" />
                        </form>
                    </Modal.Content>
                    <Modal.Action onClick={() => createApp()}> Submit </Modal.Action>
                    <Modal.Action passive onClick={() => setOpen(false)}> Cancel </Modal.Action>
                </Modal>
                
                <button onClick={() => setOpen(true)} className="bg-indigo-500 text-white p-1 w-24 h-8 rounded m-4 fixed top-12">
                    New App
                </button>
            </div>
        </div>
    )
*/
export default DashboardIndex;
