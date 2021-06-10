import { Response, Request } from "express";
import { App } from "../models";

export function createApp(res: Response, name: string, description: string): any {
    let newApp = new App({
        name: name,
        description: description
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

export function updateApp(res: Response, req: Request, id: string): any {
    const { newName, newDescription } = req.body;
    App.findByIdAndUpdate(id, { name: newName, description: newDescription}, { new: true }, (err: any, nApp: any) => {
        if (err) res.send(err);
        res.send(nApp);
    })
}