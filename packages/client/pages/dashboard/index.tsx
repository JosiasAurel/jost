import React, { FunctionComponent } from "react";
import Header from "../../components/Header";


const DashboardIndex: FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Header pageType="dashboard" userName="Josias" appName="Sample101" />

        </div>
    )
}

export default DashboardIndex;