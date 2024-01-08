import { register as studentRegisterRoutes } from '../routes/student.route';
import { register as collegeRegisterRoutes } from '../routes/college.router';

import express from 'express';


export class Router {
    private _app: express.Application;
    
    constructor(app: express.Application) {
        this._app = app;
    }
    public init = async (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            try {
                this._app.get("/api/v1", (req, res) => {
                    res.send({ message: "Demo api service" })
                })

                studentRegisterRoutes(this._app);
                console.log("at college");
                collegeRegisterRoutes(this._app);
            } catch (error) {
                console.log("Error initilizing the routes")
            }
        });
    }
}
