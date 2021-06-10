"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var mongoose_1 = require("mongoose");
var AppSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    _id: { type: String, required: true },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    pages: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Page" }]
});
var App = mongoose_1.model("App", AppSchema);
exports.App = App;
