"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pages = exports.apps = exports.users = void 0;
var deta_1 = require("deta");
var deta = deta_1.Deta(); // instance deta
/* We have 3 databases in deta for the project */
/* apps, users and pages */
// create users database
var users = deta.Base("users");
exports.users = users;
// create database for apps
var apps = deta.Base("apps");
exports.apps = apps;
// create database for pages
var pages = deta.Base("pages");
exports.pages = pages;
