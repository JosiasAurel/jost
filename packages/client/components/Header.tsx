import React, { FunctionComponent } from "react";

const Header: FunctionComponent = (): JSX.Element => {
    return (
        <header className="flex justify-between items-center backdrop-filter max-h-20 rounded bg-gray-50 bg-opacity-50 backdrop-blur-md bg-transparent  w-screen fixed inset-0">
            <nav className="flex m-5">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to to-blue-700 rounded-lg">

            </div>
            <h2 className="sm:text-2xl font-bold mx-3">Jost Analytics</h2>
            </nav>

            <nav className="hidden sm:flex mx-6">
                <a className="mx-4 hover:bg-blue-700 hover:text-white p-2 rounded-md hover:shadow-dm" href="https://github.com/JosiasAurel/jost">GitHub</a>
                <a className="mx-4 hover:bg-blue-700 hover:text-white p-2 rounded-md hover:shadow-dm" href="">Sponsor</a>
                <a className="mx-4 hover:bg-blue-700 hover:text-white p-2 rounded-md hover:shadow-dm"  href="">My Account</a>
            </nav>
        </header>
    )
}

export default Header;