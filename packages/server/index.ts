import express, { Application, Request, Response } from "express";

const app: Application = express();

const port: number = 5000 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.post("/register-request", (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
});

app.listen(port, () => console.log(`Listening at ${port}`));