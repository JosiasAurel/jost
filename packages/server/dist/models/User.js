"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    _id: { type: String, required: true },
    apps: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "app" }]
});
var User = mongoose_1.model("User", UserSchema);
exports.User = User;
