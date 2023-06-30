import Joi from "joi";
import { ErrorHandler } from "../../common/error.handler";


export class Studentvalidator{
    static async validateCreateRequest(requestBody:any){
        try{
            const schema = Joi.object({
                name:Joi.string().min(3).max(30).required(),
                age:Joi.number().integer().min(20).required(),
            });

            return await schema.validateAsync(requestBody);
        }catch(error){
            ErrorHandler.handleValidationError(error);
        }
    }

    static async validateUpdateRequest(requestBody:any){
        try{
            const schema = Joi.object({
                name:Joi.string().min(3).max(30),
                age:Joi.number().integer().min(20),
            });

            return await schema.validateAsync(requestBody);
        }catch(error){
            ErrorHandler.handleValidationError(error);
        }
    }
}