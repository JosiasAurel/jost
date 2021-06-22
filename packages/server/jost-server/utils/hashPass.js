"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPassword = exports.hashPass = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
function hashPass(password) {
    var hash = bcryptjs_1.default.hashSync(password, 8);
    return hash;
}
exports.hashPass = hashPass;
function isPassword(pass, hash) {
    var isPass = bcryptjs_1.default.compareSync(pass, hash);
    return isPass;
}
exports.isPassword = isPassword;
