/* Jost Analytics Tracking Script */
function postAnalyticalData(data) {
    var postedResponse = fetch("https://0wjb6h.deta.dev/pages/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function (res) { return console.log("Success"); })["catch"](function (err) { return console.error("Could not connect to Jost with error " + err); });
}
function getUserPLatform() {
    var platform_ = navigator.platform;
    var platform;
    var platformsMap = {
        win: "Windows",
        linux: "Linux",
        mac: "Mac"
    };
    if (platform_.toLowerCase().startsWith("win")) {
        return platformsMap["win"];
    }
    else if (platform_.toLowerCase().startsWith("linux")) {
        return platformsMap["linux"];
    }
    else if (platform_.toLowerCase().startsWith("mac")) {
        return platformsMap["mac"];
    }
    else {
        return "Other";
    }
}
self.addEventListener("load", function () {
    var pageLocation = location.href;
    var UserOs = getUserPLatform();
    postAnalyticalData({ url: pageLocation, platform: UserOs });
});
/* End - Jost ;) */ 
