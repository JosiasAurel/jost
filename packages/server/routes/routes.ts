import { Application, Request, Response } from "express";
import { createUser, deleteUser, loginUser } from "../controllers/users";
import { createApp, updateApp, deleteApp } from "../controllers/apps";

exports = function(app: Application) {

    // route to signup user
    app.post("/users/signup", (req: Request, res: Response) => {
    const { name, password } = req.body;
        createUser(name, password);
    });

    // route to delete user
    app.post("/users/delete", (req: Request, res: Response) => {
        const { name, password } = req.body;
        deleteUser(name, password);
    });

    /* // route to login user
    app.post("users/login", (req, Request, res: Response) => {
        const { name, passsword } = req.body;
        loginUser(name, passsword);
    }); */

    app.post("/apps/create", (req: Request, res: Response) => {
        const { name, description } = req.body;
        createApp(res, name, description);
    });

    app.post("/apps/update/:appId", (req: Request, res: Response) => {
        const appId = req.params.appId;
        const { name, description } = req.body;
        updateApp(res, name, description, appId);
    });
}