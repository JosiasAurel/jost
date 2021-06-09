import React, { FunctionComponent } from "react";

const Header: FunctionComponent = (): JSX.Element => {
    return (
        <header className="backdrop-filter max-h-20 rounded bg-gray-50 bg-opacity-50 backdrop-blur-md bg-transparent  w-screen fixed inset-0">
            <nav className="flex m-5">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to to-blue-700 rounded-lg">

            </div>
            <h2 className="text-2xl font-bold mx-3">Jost Analytics</h2>
            </nav>
        </header>
    )
}

export default Header;