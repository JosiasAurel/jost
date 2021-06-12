

import { Deta } from "deta";

const deta = Deta(); // instance deta

/* We have 3 databases in deta for the project */
/* apps, users and pages */

// create users database
const users = deta.Base("users");

// create database for apps
const apps = deta.Base("apps");

// create database for pages
const pages = deta.Base("pages");

/* The below interfaces are justto reference the structure of each datapoint in the database */
interface User {
    name: string
    password: string
    apps: [string] // an id to all of their apps
    id: string
}

interface App {
    name: string
    description: string
    owner: string // the ID of the user who created it
    id: string
}

interface Page {
    url: string // the URL of the page in question
    id: string // the ID of the page, just in case
    pageViews:  number // the number of page view. increment this <-
    os: [string] // an array of strings containing the platfrom of the visitor. You only push data here
}

export { users, apps, pages };