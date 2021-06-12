import express, { Application, Request, Response } from "express";
import cors from "cors";

// import CRUD handlers
import { createUser, deleteUser } from "./database/user";
import { createApp, deleteApp, updateApp, getApps } from "./database/app";
import { createPage } from "./database/page";

const app: Application = express();

// resgiter middlewares
app.use(cors());
app.use(express.json());

const port: number = 8000 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.get("/:name", (req: Request, res: Response) => {
    res.send(`Hello ${req.params.name}`);
})

/*  User endpoints */
// endpoint for registration
app.post("/register", (req: Request, res: Response) => {

    // get registraion credentials
    const { name, password } = req.body;

    let createdUser = createUser(name, password);

    res.json(createdUser);
});


/* App endpoints */

// create an app
app.post("/app", (req: Request, res: Response) => {

    // app info
    const { name, description, owner, baseUrl } = req.body;

    let createdApp = createApp(name, description, owner, baseUrl);

    res.json(createdApp);
});

// update app
app.put("/app/appId", (req: Request, res: Response) => {

    // get app id
    const appId: string = req.params.appId;

    // get app new info
    const { name, description } = req.body;

    updateApp(name, description, appId);

    res.json({message: `Updated app with ID ${appId}`});
});

app.get("/apps/:owner", async (req: Request, res: Response) => {
    const ownerId: string = req.params.owner;
    let data = await (await getApps(ownerId)).value;
    console.log(data);
    res.send(data);
});

// delete an app
app.delete("/app/:appId", (req: Request, res: Response) => {
    // get app ID
    const appId: string = req.params.appId;

    // delete app
    deleteApp(appId);

    res.json({ message: `Deleted app with ID ${appId}` });
});

/* Pages endpoint */

app.post("/pages", (req: Request, res: Response) => {
    // get page info
    const { url, platform } = req.body;

    const createdPage = createPage(url, platform);
    res.json(createdPage);
});



app.listen(port, () => console.log(`Listening at ${port}`));

module.exports = app;