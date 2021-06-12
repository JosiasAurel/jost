import { pages, users } from ".";
import { generatePageId } from "../utils/idUtils";

interface Page {
    url: string // the URL of the page in question
    id: string // the ID of the page, just in case
    pageViews:  number // the number of page view. increment this <-
    os: [string] // an array of strings containing the platfrom of the visitor. You only push data here
    app: string
}

function createPage(url: string, os: string, appId: string): any {

    /* The key of the page will be the url of the page */
    /* This is because to update it later, we are required a key which we won`t get from the url */

    // const pageId = generatePageId(); // this is useless for now

    const newPage = {
        url: url,
        pageViews: 1, // initally set to 1 when page is created because when it is created, it means there is a visit
        os: [os],
        app: appId
    }

    pages.put(newPage, url);


} 

function updatePage(url: string, os: string): any {
    pages.update({
        pageViews: pages.util.increment(1),
        os: pages.util.append(os)
    }, url);
    return "Updated";
}
