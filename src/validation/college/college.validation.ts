import Joi from "joi";
import { ErrorHandler } from "../../common/error.handler";


export class Collegevalidator{
    static async validateCreateRequest(requestBody:any){
        try{
            const schema = Joi.object({
                name:Joi.string().min(3).max(30).required(),
                studentId:Joi.number().integer().required(),
            });

            return await schema.validateAsync(requestBody);
        }catch(error){
            ErrorHandler.handleValidationError(error);
        }
    }

    static async validateUpdateRequest(requestBody:any){
        try{
            const schema = Joi.object({
                name:Joi.string().min(3).max(30).required(),
                studentId:Joi.number().integer(),
            });

            return await schema.validateAsync(requestBody);
        }catch(error){
            ErrorHandler.handleValidationError(error);
        }
    }
}