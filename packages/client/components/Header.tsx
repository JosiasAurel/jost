import React, { FunctionComponent } from "react";
import Link from "next/link";

interface HeaderProps {
    pageType: string
    appName?: string
    userName?: string
}

const Header: FunctionComponent<HeaderProps> = ({ pageType, appName, userName }): JSX.Element => {
    return (
        <header className="flex justify-between items-center backdrop-filter max-h-20 rounded bg-gray-50 bg-opacity-50 backdrop-blur-md bg-transparent  w-screen fixed inset-0">
            <nav className="flex m-5 items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to to-blue-700 rounded-lg">

            </div>
            <h2 className="sm:text-2xl font-bold mx-3">Jost Analytics</h2>

            { appName ? <h2 className="backdrop-filter backdrop-invert text-white border-white rounded text-bold bg-black p-2" > { appName } </h2> : "" }
            </nav>

            {/* If on any page other than dashboard, show the links below */}
            { pageType === "any" ?  
            <nav className="hidden sm:flex mx-6">
                <a className="mx-4 hover:bg-blue-700 hover:text-white p-2 rounded-md hover:shadow-dm" href="https://github.com/JosiasAurel/jost">GitHub</a>
                <a className="mx-4 hover:bg-blue-700 hover:text-white p-2 rounded-md hover:shadow-dm" href="https://www.buymeacoffee.com/rocketstellar">Sponsor</a>
                <Link href="/dashboard">
                    <a className="mx-4 hover:bg-blue-700 hover:text-white p-2 rounded-md hover:shadow-dm" >My Account</a>
                </Link>
            </nav>
                :
                <nav>

                    <button className="bg-indigo-500 mx-4 p-2 rounded text-white">
                        { userName }
                    </button>
                </nav>
             }
            
        </header>
    )
}

export default Header;