
/* Utilities related to IDs  */

import { nanoid } from "nanoid";

function generateUserId(): string {
    const id_: string = nanoid(20);
    return id_;
}

function generateAppId(): string {
    const id_: string = nanoid(25);
    return id_;
}

function generatePageId(): string {
    const id_: string = nanoid(14);
    return id_;
}

/* console.log(generatePageId()); */

export { generateUserId, generateAppId, generatePageId };