

import { User } from "../models";

export function createUser( name: string, password: string): any {
    let newUser = new User({
        name: name,
        password: password
    });

    newUser.save();

    return newUser;
}

export function loginUser(name: string, password: string): any {
    let user_ = User.findOne({name: name, password: password}, (err: any, user: any) => {
        if (err) return err
        return user
    });

    return user_;
}

export function deleteUser(name: string, password: string): object {
    User.deleteOne({name: name, password: password});
    return { status: "Success" }
}   
