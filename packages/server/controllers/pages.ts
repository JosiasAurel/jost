
import { Page } from "../models/Page";
import { generatePageId } from "../utils/idUtils";

/* We can only create/update information about page views  */

/* So we have two controller for pages -> creating and updating */

function createPage(url: string, os: string): void {
    let newPage = new Page({
        _id: generatePageId(),
        viewCount: 1,
        os: [os]
    });

    newPage.save((err: any, p: any) => {
        if (err) throw new Error(err);
    });
}

/* When updating a page, we only update viewCount and os => */
// when a request is made on a page, then it means we want to update the viewCount
// we only therefore add an OS to the page
// the assumption in the code below is that no two people will link the service to the same site
function updatePage(url:string, os_: string):  void {
    // first get current viewCout and OSs
    Page.findOne({ url: url }, (error: any, p: any) => {
        Page.findOne({url: url}, { viewCount: p.viewCount+1, os: p.os.push(os_) }).then(console.log).catch(err => console.error(err))
    });
}

export { createPage, updatePage }

