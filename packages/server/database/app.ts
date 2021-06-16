import { apps, users } from ".";
import { generateAppId } from "../utils/idUtils";
import { GetResponse } from "deta/dist/types/types/base/response";

async function createApp(name: string, description: string, owner: string, baseUrl: string) {
    const appId = generateAppId();
    
    const newApp = {
        name: name,
        description: description, 
        owner: owner,
        baseUrl: baseUrl
    }

    apps.put(newApp, appId);

    // update the apps in the user base
    users.update({app: users.util.append(appId)}, owner);

    return { name: name, description: description, owner: owner, id: appId, baseUrl: baseUrl };
}

function deleteApp(id: string): boolean {
    apps.delete(id);
    return true;
}

async function updateApp(name: string, description: string , appId: string): Promise<GetResponse> {
    apps.update({name: name, description: description}, appId);
    const updatedApp = await apps.get(appId);
    return updatedApp;
}

async function getApps(owner: string) {
    let returnApps;
    let appsBy = await apps.fetch({"owner": owner}).next();
    return appsBy;
}

async function getApp(id: string) {
    const app: any = await apps.get(id);
    return app;
}

export { createApp, deleteApp, updateApp, getApps, getApp };