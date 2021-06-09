import React, { FunctionComponent } from "react";

const Header: FunctionComponent = (): JSX.Element => {
    return (
        <header>
            <nav className="flex m-5">
                <div className="w-10 h-10 bg-blue-500 rounded">

            </div>
            <h2 className="text-2xl font-bold mx-3">Jost Analytics</h2>
            </nav>
        </header>
    )
}

export default Header;