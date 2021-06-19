"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// import custom libs
var dateUtil_1 = require("./utils/dateUtil");
var app = express_1.default();
// resgiter middlewares
app.use(cors_1.default({
    origin: "*"
}));
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
    var _a = req.body, name = _a.name, password = _a.password, email = _a.email;
    var createdUser = user_1.createUser(name, password, email);
    res.json(createdUser);
});
app.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email;
                return [4 /*yield*/, user_1.loginUser(email, name)];
            case 1: return [4 /*yield*/, (_b.sent()).value[0]];
            case 2:
                user = _b.sent();
                console.log(user);
                res.send(user);
                return [2 /*return*/];
        }
    });
}); });
/* App endpoints */
// create an app
app.post("/app", function (req, res) {
    // app info
    var _a = req.body, name = _a.name, description = _a.description, owner = _a.owner, baseUrl = _a.baseUrl;
    console.log(req.body);
    var createdApp = app_1.createApp(name, description, owner, baseUrl);
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
app.get("/apps/:owner", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ownerId, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ownerId = req.params.owner;
                return [4 /*yield*/, app_1.getApps(ownerId)];
            case 1: return [4 /*yield*/, (_a.sent()).value];
            case 2:
                data = _a.sent();
                console.log(data);
                res.send(data);
                return [2 /*return*/];
        }
    });
}); });
// delete an app
app.delete("/app/:appId", function (req, res) {
    // get app ID
    var appId = req.params.appId;
    // delete app
    app_1.deleteApp(appId);
    res.json({ message: "Deleted app with ID " + appId });
});
/* Pages endpoint */
app.post("/pages/create", function (req, res) {
    // get page info
    var _a = req.body, url = _a.url, platform = _a.platform;
    var pageDate = dateUtil_1.thisDate();
    var createdPage = page_1.createPage(url, pageDate, platform);
    res.json(createdPage);
});
app.post("/pages", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var base, pages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                base = req.body.base;
                return [4 /*yield*/, page_1.getPages("" + base)];
            case 1: return [4 /*yield*/, (_a.sent()).value];
            case 2:
                pages = _a.sent();
                console.log(pages);
                res.send({ pages: pages });
                return [2 /*return*/];
        }
    });
}); });
app.get("/app/:appId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app_1.getApp(req.params.appId)];
            case 1:
                info = _a.sent();
                console.log(info);
                res.send(info);
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () { return console.log("Listening at " + port); });
module.exports = app;
