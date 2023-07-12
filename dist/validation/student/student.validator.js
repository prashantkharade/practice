"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Studentvalidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/error.handler");
class Studentvalidator {
    static validateCreateRequest(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    name: joi_1.default.string().min(3).max(30).required(),
                    age: joi_1.default.number().integer().min(20).required(),
                });
                return yield schema.validateAsync(requestBody);
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
    // static async validateCreateRequest(requestBody:any){
    //     try{
    //         // const schema = validator.({
    //             validateFirstName : check('fn')
    //             // To delete leading and trailing space
    //             .trim()
    //             // Validate the minimum length of the password
    //             // Optional for this context
    //             .isLength({min:3})
    //             // Custom message
    //             .withMessage('First Name must be 3 characters long')
    //             // Name must contains only alphabets
    //             .isAlpha()
    //             // Custom message
    //             .withMessage('First Name must be alphabetic'),
    //             // age:Joi.number().integer().min(20).required(),
    //         });
    //         return await schema.validateAsync(requestBody);
    //     }catch(error){
    //         ErrorHandler.handleValidationError(error);
    //     }
    // }
    static validateUpdateRequest(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    name: joi_1.default.string().min(3).max(30),
                    age: joi_1.default.number().integer().min(20),
                });
                return yield schema.validateAsync(requestBody);
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.Studentvalidator = Studentvalidator;
