import express, { Application, Request, Response } from "express";
import cors from "cors";

// import CRUD handlers
import { createUser, deleteUser } from "./database/user";
import { createApp, deleteApp, updateApp } from "./database/app";
import { createPage, updatePage } from "./database/page";

const app: Application = express();

// resgiter middlewares
app.use(cors());
app.use(express.json());

const port: number = 8000 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.post("/register-request", (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
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
app.post("/app", (req: Request, res: Response) => {

    // app info
    const { name, description, owner } = req.body;

    let createdApp = createApp(name, description, owner);

    res.json(createdApp);
});

app.delete("/app/:appId", (req: Request, res: Response) => {
    // get app ID
    const appId: string = req.params.appId;

    // delete app
    deleteApp(appId);

    res.json({ Message: `Deleted app with ID ${appId}` });
});


app.listen(port, () => console.log(`Listening at ${port}`));

module.exports = app;