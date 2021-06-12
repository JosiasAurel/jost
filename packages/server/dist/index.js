"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
// resgiter middlewares
app.use(cors_1.default());
app.use(express_1.default.json());
var port = 8000 || process.env.PORT;
app.get("/", function (req, res) {
    res.send("Hello from server");
});
app.post("/register-request", function (req, res) {
    var data = req.body;
    console.log(data);
});
app.get("/:name", function (req, res) {
    res.send("Hello " + req.params.name);
});
app.listen(port, function () { return console.log("Listening at " + port); });
module.exports = app;
