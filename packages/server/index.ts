import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose = require("mongoose");

const app: Application = express();

// resgiter middlewares
app.use(cors());
app.use(express.json());

// connect to Mongo Database
mongoose.connect("mongodb://localhost:27017/jost", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// import models 
import { User, App } from "./models/index";

const port: number = 8000 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from server");
});

app.post("/register-request", (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
});

app.get("/create-app", (req: Request, res: Response) => {
    let app = new App({
        name: "Yolo",
        description: "What the app"
    });
    app.save();
    res.send(app);
})

app.listen(port, () => console.log(`Listening at ${port}`));

export default app;