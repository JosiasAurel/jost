import express, { Application, Request, Response } from "express";
import cors from "cors";

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


app.listen(port, () => console.log(`Listening at ${port}`));

module.exports = app;