import { pages } from ".";
import { generatePageId } from "../utils/idUtils";

interface Page {
    url: string // the URL of the page in question
    id: string // the ID of the page, just in case
    pageViews:  number // the number of page view. increment this <-
    os: [string] // an array of strings containing the platfrom of the visitor. You only push data here
    app: string
}

async function createPage(url: string, date: string, platform: string) {

    /* The key of the page will be the url of the page */
    /* This is because to update it later, we are required a key which we won`t get from the url */

    // const pageId = generatePageId(); // this is useless for now

    let rotatePage: any = await pages.get(date);

    if (rotatePage === null) {
        // const pageDate: string = thisDate();
            const newPage = {
            url: url,
            pageViews: 1, // initally set to 1 when page is created because when it is created, it means there is a visit
            platform: [platform],
            pageDate: date
        }

        pages.put(newPage, date);

        return {
               url: url,
            platform: [platform],
            pageViews: 1,
            pageDate: date
        }
    } else {
            pages.update({
            pageViews: pages.util.increment(1),
            platform: pages.util.append(platform)
        }, date);
        return "Updated";
    }
} 

async function getPages(base: string) {
    const pages_ = await pages.fetch({"url?contains": base}).next();
    return pages_;
}

export { createPage, getPages };