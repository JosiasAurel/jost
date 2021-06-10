
/* Jost Analytics Tracking Script */

function postAnalyticalData(data): void {
    const postedResponse = fetch(`http://localhost:8000/register-request`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => console.log("Success"))
        .catch(err => console.error(`Could not connect to Jost with error ${err}`))
}

function getUserPLatform(): string {
    const platform_: string = navigator.platform;
    let platform;
    let platformsMap: any = {
        win: "Windows",
        linux: "Linux",
        mac: "MacOS"
    }
    if (platform_.toLowerCase().startsWith("win")) {
        return platformsMap["win"];
    } else if (platform_.toLowerCase().startsWith("linux")) {
        return platformsMap["linux"];
    } else if (platform_.toLowerCase().startsWith("mac")) {
        return platformsMap["mac"];
    } else {
        return "Other";
    }
}

self.addEventListener("load", () => {
    const pageLocation = location.href;
    const UserOs = getUserPLatform();
    postAnalyticalData({ url: pageLocation, platform: UserOs});
}); 

/* End - Jost ;) */