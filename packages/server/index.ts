import express, { Application, Request, Response } from "express";
import cors from "cors";

// import CRUD handlers
import { createUser, deleteUser, loginUser } from "./database/user";
import { createApp, deleteApp, updateApp, getApps, getApp } from "./database/app";
import { createPage, getPages } from "./database/page";

// import custom libs
import { thisDate } from "./utils/dateUtil";
import { stringify } from "querystring";

const app: Application = express();

// resgiter middlewares
app.use(cors({
    origin: "*"
}));
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
    const { name, password, email } = req.body;

    let createdUser = createUser(name, password, email);

    res.json(createdUser);
});

app.post("/login", async (req: Request, res: Response) => {
    const { name, email } = req.body;
    let user =  await (await loginUser(email, name)).value[0];
    console.log(user);
    res.send(user);
})

/* App endpoints */

// create an app
app.post("/app", (req: Request, res: Response) => {

    // app info
    const { name, description, owner, baseUrl } = req.body;
    console.log(req.body)

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

app.post("/pages/create", async (req: Request, res: Response) => {
    // get page info
    const { url, platform } = req.body;

    const pageDate: string = thisDate();

    const createdPage = await createPage(url, pageDate, platform);
    console.log(`Request response ${createdPage}`)
    res.json(createdPage);
});

app.post("/pages", async (req: Request, res: Response) => {
    const { base } = req.body;
    const pages = await (await getPages(`${base}`)).value;
    console.log(pages)
    res.send({pages: pages});
})

app.get("/app/:appId", async (req: Request, res: Response) => {
    let info = await getApp(req.params.appId);
    console.log(info);
    res.send(info);
});



app.listen(port, () => console.log(`Listening at ${port}`));

module.exports = app;