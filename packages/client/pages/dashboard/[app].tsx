import React, { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header";
import { Table } from "@geist-ui/react";
import { Pie, Bar } from "react-chartjs-2";

const serverAddr: string = "https://0wjb6h.deta.dev";
// const serverAddr: string = "http://localhost:8000";

/* interface AppPageProps {
    baseUrl: string
    description: string
    key: string
    name: string
    owner: string
} */

// interfaces
interface JostUser {
    name: string
    id: string
}

interface AppPageProps {
    pagesData: any
    appData: any
    getInitialProps: any
}

const AppPage: FunctionComponent<AppPageProps> = ({ pagesData, appData }): JSX.Element => {

    const [user, setUser] = useState<JostUser>({name: "", id: ""});

    useEffect(() => {
        // fetch user info from localstorage
        const lUser = JSON.parse(localStorage.getItem("user"));
        setUser(lUser);
    }, []);

    // Setting up the datatets

    // Pie chart dataset
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

    let totalPageViewCount = 0;
    const lineData = {
  labels: ['16/06/2021', '17/06/2021', '18/06/2021', '18/06/2021', '19/06/2021', '20/06/2021'],
  datasets: [
    {
      label: 'Number of Views',
      data: [11, 8, 15, 6, 10, 18],
      backgroundColor: [
        'rgba(255, 99, 255, 0.2)',
      ],
      borderColor: [
        'rgba(132, 99, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


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
    console.log(appData)
    return (
        <div>
            <Header pageType="dashboard" userName={user.name} appName={App.name} />

            <div className="my-32 w-88 max-h-20">
                <Bar data={lineData} />
            </div>
            <div className="flex items-center my-20">
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
                <Pie type="" data={pieData} />
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