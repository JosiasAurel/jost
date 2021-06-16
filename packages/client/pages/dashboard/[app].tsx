import React, { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header";
import { Table } from "@geist-ui/react";
import { Pie } from "react-chartjs-2";

const serverAddr: string = "https://0wjb6h.deta.dev";
// const serverAddr: string = "http://localhost:8000";

/* interface AppPageProps {
    baseUrl: string
    description: string
    key: string
    name: string
    owner: string
} */

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

interface AppPageProps {
    pagesData: any
    appData: any
}

const AppPage: FunctionComponent<AppPageProps> = ({ pagesData, appData }): JSX.Element => {

    let windows = 0;
    let mac = 0;
    let linux = 0;

    function countPlatform(): void {
        let osData = pagesData.pages;
        osData.forEach((os) => {
            os = os.platform;
            os.forEach(o => {
                if (o === "Windows") windows++
                if (o === "Mac") mac++
                if (o === "Linux") linux++
            })
        })
    }

    countPlatform();

    const pieData = {
    labels: ["Windows", "MacOS", "Linux"],
    datasets: [
        {
            label: "Distribution of Platforms",
            data: [windows, mac, linux],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
            ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
        }
    ]
}


    const [App, setApp] = useState({
        name: appData.name,
        description: appData.description,
        baseUrl: appData.baseUrl,
        key: appData.key
    }); 
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(pagesData.pages)
    }, [data])
    console.log(pagesData.pages)
    return (
        <div>
            <Header pageType="dashboard" appName={App.name} />
            <div className="flex items-center">
                <div className="py-20 max-w-md m-12 border-black">
                <Table data={data}>
                    <Table.Column prop="url" label="URL" />
                    <Table.Column prop="pageViews" label="Page Views" />
                    {/* { data.map(p => {
                            return (
                                <tr>
                                    <td className="border-gray-400">
                                        {p.key}
                                    </td> 
                                    <td className="border-gray-400">
                                        {p.pageViews}
                                    </td>
                                </tr> 
                            )
                        }) } */}
                </Table>
            </div>

            <div className="max-w-xs">
                <Pie data={pieData} />
            </div>
            </div>
        </div>
    )
}

AppPage.getInitialProps = async (ctx) => {
    const appId = ctx.query.app;
    const appDataRes = await fetch(`${serverAddr}/app/${appId}`);
    const appData = await appDataRes.json();
    console.log(appData)


    // get pages info
    let pagesRes = await fetch(`${serverAddr}/pages/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({base: appData.baseUrl}),
        })
    let pagesData = await pagesRes.json()
    console.log(pagesData)
    return { pagesData, appData }
}

export default AppPage;