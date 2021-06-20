
import { users } from ".";
import { generateUserId } from "../utils/idUtils";
import { hashPass } from "../utils/hashPass";

interface User {
    name: string
    password: string
    apps: [string] // an id to all of their apps
    id: string
    email: string
}

function createUser(name: string, password: string, email: string) {

    const hashedPassword: string = hashPass(password);
    const newUser = {
        name: name,
        password: hashedPassword,
        apps: [],
        email: email
    }

    const newUserKey: string = generateUserId();

    users.put(newUser, newUserKey);

    let newUserStruct = {
        name: name,
        password: hashedPassword,
        id: newUserKey,
        app: [],
        email: email
    }
    return newUserStruct;

}

async function loginUser(email: string, name: string) {
    let user = await users.fetch({"name?contains": name, "email?contains": email}).next()
    // console.log(user.value)
    return user;
}

async function deleteUser(key: string) {
    await users.delete(key);
}



export { createUser, deleteUser, loginUser };