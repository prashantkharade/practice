import * as express from 'express'
import bodyParser from 'body-parser';
import { CollegeController } from '../controller/college.controller';

export const register = (app:express.Application) => {
    const collegeService = express.Router();

    const controller = new CollegeController();

    collegeService.get("/all", controller.get);

    collegeService.get("/:id", controller.getById);

    collegeService.post("/", controller.create);

    collegeService.put("/:id", controller.update);

    collegeService.delete("/:id", controller.delete);

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/collegeService", collegeService);

}