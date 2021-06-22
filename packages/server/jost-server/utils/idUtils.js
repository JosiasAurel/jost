"use strict";
/* Utilities related to IDs  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePageId = exports.generateAppId = exports.generateUserId = void 0;
var nanoid_1 = require("nanoid");
function generateUserId() {
    var id_ = nanoid_1.nanoid(20);
    return id_;
}
exports.generateUserId = generateUserId;
function generateAppId() {
    var id_ = nanoid_1.nanoid(25);
    return id_;
}
exports.generateAppId = generateAppId;
function generatePageId() {
    var id_ = nanoid_1.nanoid(14);
    return id_;
}
exports.generatePageId = generatePageId;
