
import { users } from ".";
import { generateUserId } from "../utils/idUtils";
import { hashPass } from "../utils/hashPass";

interface User {
    name: string
    password: string
    apps: [string] // an id to all of their apps
    id: string
}

function createUser(name: string, password: string) {

    const hashedPassword: string = hashPass(password);
    const newUser = {
        name: name,
        password: hashedPassword,
        apps: []
    }

    const newUserKey: string = generateUserId();

    users.put(newUser, newUserKey);

    let newUserStruct = {
        name: name,
        password: hashedPassword,
        id: newUserKey,
        app: []
    }
    return newUserStruct;

}

async function deleteUser(key: string) {
    await users.delete(key);
}

export { createUser, deleteUser,  };