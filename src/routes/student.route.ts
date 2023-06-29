import * as express from 'express'
import bodyParser from 'body-parser';
import { StudentController } from '../controller/student.controller';

export const register = (app:express.Application) => {
    const studentService = express.Router();

    const controller = new StudentController();

    studentService.get("/all", controller.get);

    studentService.get("/:id", controller.getById);

    studentService.post("/", controller.create);

    studentService.put("/:id", controller.update);

    studentService.delete("/:id", controller.delete);

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/studentService", studentService);

}