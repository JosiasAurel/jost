import React, { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header";

// interfaces
interface JostUser {
    name: string
    id: string
}


const DashboardIndex: FunctionComponent = (): JSX.Element => {
    const [user, setUser] = useState<JostUser>({name: "", id: ""});

    useEffect(() => {
        // fetch user info from localstorage
        const lUser = JSON.parse(localStorage.getItem("user"));
        setUser(lUser);
    });
    return (
        <div>
            <Header pageType="dashboard" userName={user.name} appName="" />
            <div>
                
            </div>
        </div>
    )
}

export default DashboardIndex;