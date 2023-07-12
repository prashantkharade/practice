import * as express from 'express'

import { ResponseHandler } from '../common/response.handler';
import { ErrorHandler } from '../common/error.handler';
import { ApiError } from '../common/api.error';
import { CollegeService } from '../service/college.service';
import { Collegevalidator } from '../validation/college/college.validation';
import { CollegeUpdateModel } from '../domain.types/college/college.domain.types';


export class CollegeController {

    public service: CollegeService;
    constructor() {
        this.service = new CollegeService();
    }



    get = async (req: express.Request, res: express.Response) => {
        try {
            const record = await this.service.getCollege(req);
            // if (record=== 0) {
            //     ErrorHandler.throwNotFoundError("no record found");
            // }

            const message = "Successfully received the data"
            ResponseHandler.success(req, res, message, 200, record);

        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            const id: number = parseInt(req.params.id);
            const record = await this.service.getCollegeById(id);
            if (record === null) {
                ErrorHandler.throwNotFoundError("College not found");
            }
            const message = "Successfully received the data"
            ResponseHandler.success(req, res, message, 200, record);

        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };




    create = async (req: express.Request, res: express.Response) => {
        try {
            await Collegevalidator.validateCreateRequest(req.body);

            let college = await this.service.createCollege(req);
          
            if (college === null) {
                
                throw new ApiError("Unable to create college.....!", 400);
            }

            const message = "Successfully inserted the college"
            ResponseHandler.success(req, res, message, 200, college);

        } catch (error: any) {
            console.log("error in catch");
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {

        try {
            const id: number = parseInt(req.params.id);
            const isUpdate = await this.service.getCollegeById(id);
            if (isUpdate === null) {
                ErrorHandler.throwNotFoundError(`College with id ${req.params.id} not found`);
            }

            await Collegevalidator.validateUpdateRequest(req.body);
            const UpdateModel:CollegeUpdateModel = this.getUpdateModel(req.body);

            const college = await this.service.updateCollege(id,UpdateModel);
            ResponseHandler.success(req, res, "Successfully updated", 200, college);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);

        }
    }

    delete = async (req: express.Request, res: express.Response) => {
        try {
            const id: number = parseInt(req.params.id);
            const isPresent = await this.service.getCollegeById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`College with id ${req.params.id} not found`);
            }
            const college = await this.service.deleteCollege(id);
            const message = "College record deleted successfully";
            ResponseHandler.success(req, res, message, 200, college);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);

        }
    }

    private getUpdateModel(requestBody:any):CollegeUpdateModel{
        const model:CollegeUpdateModel={
            name:requestBody.name,
            studentId:requestBody.studentId ? parseInt(requestBody.studentId) :undefined,
        };
        return model;
    }


}



