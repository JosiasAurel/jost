import React, { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header";
import { Table } from "@geist-ui/react";
import { Pie, Bar } from "react-chartjs-2";
import { Modal, Code, Card } from "@geist-ui/react";
import jwt from "jsonwebtoken";

// server address
const serverAddr: string = "https://jost.deta.dev"; //`${process.env.JOST_SERVER}`;
const SECRET_KEY: string = `${process.env.SECRET}`;

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
    iat: any
}

interface AppPageProps {
    pagesData: any
    appData: any
    getInitialProps: any
}

const AppPage: FunctionComponent<AppPageProps> = ({ pagesData, appData }): JSX.Element => {

    const [user, setUser] = useState<any>({});

    const [d, setD] = useState("");
    useEffect(() => {
        let token: string = localStorage.getItem("user");

        let user_ = jwt.verify(token, SECRET_KEY);

        setUser(user_);
        console.log(user_);
        setD("d")
    }, [d]);

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

    // modal and state
    const [open, setOpen] = useState(false);
    function modalCloseHandler() {
        setOpen(false);
    }

    let script_ = '<script src="https://cdn.jsdelivr.net/npm/jost-analytics@1.3.0/jost.min.js"></script>'
    return (
        <div>
            <Header pageType="dashboard" userName={user.name} appName={App.name} />
            <button onClick={() => setOpen(true)} className="bg-indigo-500 text-white p-1 w-24 h-8 rounded m-4 fixed top-12">
                    Connect App
                </button>
            <div className="my-32 w-88 max-h-20">
                {/* <Bar type="" data={lineData} /> */}
            </div>
            <div className="flex items-center justify-evenly sm:flex-row flex-col my-20">
            <div className="m-4">
                <Table data={data}>
                    <Table.Column prop="url" label="URL" />
                    <Table.Column prop="pageViews" label="Page Views" />
                </Table>
            </div>

            <div className="max-w-xs">
                <Pie type="" data={pieData} />
            </div>
            </div>

            <Modal open={open} onClose={modalCloseHandler}>
                    <Modal.Title> Create New App </Modal.Title>
                    <Modal.Content>
                        <div>
                            <h2 className="text-center">Paste this script in the head tag of the site you widh to track.</h2>
                            <Code>
                                <Card>
                                    {script_}
                                </Card>
                            </Code>
                        </div>
                        <div>
                            
                        </div>
                    </Modal.Content>
                    <Modal.Action passive onClick={() => setOpen(false)}> Cancel </Modal.Action>
                </Modal>
        </div>
    )
}

export async function getServerSideProps(ctx) {
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
    return {
        props: { pagesData, appData }
    }
}

export default AppPage;
