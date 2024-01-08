import express from "express";
import { Router } from "./startup/router";

export default class Application {
  public _app: express.Application;

  private _router: Router;

  private static _instance: Application;

  private constructor() {
    this._app = express();
    this._router = new Router(this._app);
  }

  public static instance(): Application {
    // if (this._instance === null) {
    //     this._instance = new this();
    //     return this._instance;
    // }
    // else {
    //     return this._instance;
    // }
    return this._instance || (this._instance = new this());
  }

  start = async () => {
    try {
      this._router.init();
      this.listen();
    } catch (error) {}
  };

  private listen = async () => {
    return new Promise((resolve, reject) => {
      try {
        this._app.listen(process.env.PORT, () => {
          console.log(`"its a port ${process.env.PORT}"`);
        });
      } catch (error) {
        console.log("Error in listening");
      }
    });
  };
}
