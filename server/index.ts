import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.listen(3000, () => console.log("Listening at 3000"));