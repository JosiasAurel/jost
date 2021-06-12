"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// import CRUD handlers
var user_1 = require("./database/user");
var app_1 = require("./database/app");
var page_1 = require("./database/page");
var app = express_1.default();
// resgiter middlewares
app.use(cors_1.default());
app.use(express_1.default.json());
var port = 8000 || process.env.PORT;
app.get("/", function (req, res) {
    res.send("Hello from server");
});
app.get("/:name", function (req, res) {
    res.send("Hello " + req.params.name);
});
/*  User endpoints */
// endpoint for registration
app.post("/register", function (req, res) {
    // get registraion credentials
    var _a = req.body, name = _a.name, password = _a.password;
    var createdUser = user_1.createUser(name, password);
    res.json(createdUser);
});
/* App endpoints */
// create an app
app.post("/app", function (req, res) {
    // app info
    var _a = req.body, name = _a.name, description = _a.description, owner = _a.owner;
    var createdApp = app_1.createApp(name, description, owner);
    res.json(createdApp);
});
// update app
app.put("/app/appId", function (req, res) {
    // get app id
    var appId = req.params.appId;
    // get app new info
    var _a = req.body, name = _a.name, description = _a.description;
    app_1.updateApp(name, description, appId);
    res.json({ message: "Updated app with ID " + appId });
});
// delete an app
app.delete("/app/:appId", function (req, res) {
    // get app ID
    var appId = req.params.appId;
    // delete app
    app_1.deleteApp(appId);
    res.json({ message: "Deleted app with ID " + appId });
});
/* Pages endpoint */
app.post("/pages", function (req, res) {
    // get page info
    var _a = req.body, url = _a.url, platform = _a.platform, appId = _a.appId;
    var createdPage = page_1.createPage(url, platform, appId);
    res.json(createdPage);
});
app.post("/register-request", function (req, res) {
    var _a = req.body, platform = _a.platform, url = _a.url;
    page_1.updatePage(url, platform);
    res.json({ message: "Update page with url " + url });
});
app.listen(port, function () { return console.log("Listening at " + port); });
module.exports = app;
