import * as express from 'express'

import { StudentService } from '../service/student.service';
import { ResponseHandler } from '../common/response.handler';
import { ErrorHandler } from '../common/error.handler';
import { ApiError } from '../common/api.error';
import { Studentvalidator } from '../validation/student/student.validator';
import { StudentUpdateModel } from '../domain.types/student/student.domain.types';

export class StudentController {

    public service: StudentService;
    constructor() {
        this.service = new StudentService();
    }



    get = async (req: express.Request, res: express.Response) => {
        try {
            const student = await this.service.getStudent(req);
            if (student.length === 0) {
                ErrorHandler.throwNotFoundError("no record found");
            }

            const message = "Successfully received the data"
            ResponseHandler.success(req, res, message, 200, student);

        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            const id: number = parseInt(req.params.id);
            const record = await this.service.getStudentById(id);
            if (record === null) {
                ErrorHandler.throwNotFoundError("Student not found");
            }

            const message = "Successfully received the data"
            ResponseHandler.success(req, res, message, 200, record);

        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };




    create = async (req: express.Request, res: express.Response) => {
        try {
            await Studentvalidator.validateCreateRequest(req.body)
            console.log("error after try");
            let student = await this.service.createStudent(req);
            console.log("error after method call");
            if (student === null) {
                console.log("student not created");
                throw new ApiError("Unable to create user.....!", 400);
            }

            const message = "Successfully created the student"
            ResponseHandler.success(req, res, message, 200, student);

        } catch (error: any) {
            console.log("error in catch");
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {

        try {
            const id: number = parseInt(req.params.id);
            const isUpdate = await this.service.getStudentById(id);
            if (isUpdate === null) {
                ErrorHandler.throwNotFoundError(`Student with id ${req.params.id} not found`);
            }

            await Studentvalidator.validateUpdateRequest(req.body);
            const UpdateModel:StudentUpdateModel = this.getUpdateModel(req.body);
            const student = await this.service.updateStudent(id,UpdateModel);
            ResponseHandler.success(req, res, "Successfully updated", 200, student);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);

        }
    }

    delete = async (req: express.Request, res: express.Response) => {
        try {
            const id: number = parseInt(req.params.id);
            const isPresent = await this.service.getStudentById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`Student with id ${req.params.id} not found`);
            }
            const student = await this.service.deleteStudent(id);
            const message = "Student record deleted successfully";
            ResponseHandler.success(req, res, message, 200, student);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
            }
    };


    private getUpdateModel(requestBody:any):StudentUpdateModel{
        const model:StudentUpdateModel={
            name:requestBody.name,
            age:requestBody.age ? parseInt(requestBody.age) :undefined,
        };
        return model;
    }
   

}



