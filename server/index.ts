import express, { Application, Request, Response } from "express";

const app: Application = express();

const port: number = 5000 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.listen(port, () => console.log(`Listening at ${port}`));