import { apps, users } from ".";
import { generateAppId } from "../utils/idUtils";
import { GetResponse } from "deta/dist/types/types/base/response";

async function createApp(name: string, description: string, owner: string): Promise<GetResponse> {
    const appId = generateAppId();
    
    const newApp = {
        name: name,
        description: description, 
        owner: owner
    }

    apps.put(newApp, appId);

    // update the apps in the user base
    users.update({app: users.util.append(appId)}, owner);

    return { name: name, description: description, owner: owner, id: appId };
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

async function getApps(owner: string): any {
    let appsBy = await apps.fetch({owner: owner});
    return appsBy;
}

export { createApp, deleteApp, updateApp };