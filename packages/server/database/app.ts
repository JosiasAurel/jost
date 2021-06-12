import { apps } from ".";
import { generateAppId } from "../utils/idUtils";
import { GetResponse } from "deta/dist/types/types/base/response";

function createApp(name: string, description: string, owner: string): any {
    const appId = generateAppId();
    
    const newApp = {
        name: name,
        description: description, 
        owner: owner
    }

    apps.put(newApp, appId);

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