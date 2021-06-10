import { Response, Request } from "express";
import { App } from "../models";
import { generateAppId } from "../utils/idUtils";

export function createApp(res: Response, name: string, description: string): any {
    let newApp = new App({
        name: name,
        description: description,
        _id: generateAppId()
    });
    newApp.save((err, app) => {
        if (err) return err
    });

    return newApp;
}

export function deleteApp(res: Response, id: string): any {
    App.findByIdAndDelete(id);
    return { status: "Success" }
}

export function updateApp(res: Response, name: string, description: string , id: string): any {
    App.findByIdAndUpdate(id, { name: name, description: description}, { new: true }, (err: any, nApp: any) => {
        if (err) res.send(err);
        res.send(nApp);
    })
}