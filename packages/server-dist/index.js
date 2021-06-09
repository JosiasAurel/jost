"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 5000 || process.env.PORT;
app.get("/", function (req, res) {
    res.send("Hello from server");
});
app.listen(port, function () { return console.log("Listening at " + port); });
