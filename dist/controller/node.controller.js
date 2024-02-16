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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const node_service_1 = require("../service/node.service");
const response_handler_1 = require("../common/response.handler");
const api_error_1 = require("../common/api.error");
class QuestionController {
    constructor() {
        // get = async (req: express.Request, res: express.Response) => {
        //   try {
        //     const queC = await this.service.getQuestion(req);
        //     if (queC.length === 0) {
        //       ErrorHandler.throwNotFoundError("no record found");
        //     }
        //     const message = "Successfully received the data";
        //     ResponseHandler.success(req, res, message, 200, queC);
        //   } catch (error: any) {
        //     ResponseHandler.handleError(req, res, error);
        //   }
        // };
        // getById = async (req: express.Request, res: express.Response) => {
        //   try {
        //     const id: number = parseInt(req.params.id);
        //     const record = await this.service.getQuestionById(id);
        //     if (record === null) {
        //       ErrorHandler.throwNotFoundError("Student not found");
        //     }
        //     const message = "Successfully received the data";
        //     ResponseHandler.success(req, res, message, 200, record);
        //   } catch (error: any) {
        //     ResponseHandler.handleError(req, res, error);
        //   }
        // };
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // await Studentvalidator.validateCreateRequest(req.body)
                console.log("error after try");
                let queC = yield this.service.createQuestion(req);
                console.log("error after method call");
                if (queC === null) {
                    console.log("student not created");
                    throw new api_error_1.ApiError("Unable to create user.....!", 400);
                }
                const message = "Successfully created the student";
                response_handler_1.ResponseHandler.success(req, res, message, 200, queC);
            }
            catch (error) {
                console.log("error in catch", error);
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.service = new node_service_1.QuestionService();
    }
    // update = async (req: express.Request, res: express.Response) => {
    //   try {
    //     const id: number = parseInt(req.params.id);
    //     const isUpdate = await this.service.getQuestionById(id);
    //     if (isUpdate === null) {
    //       ErrorHandler.throwNotFoundError(
    //         `Question with id ${req.params.id} not found`
    //       );
    //     }
    //     // await Studentvalidator.validateUpdateRequest(req.body);
    //     const UpdateModel: QuestionUpdateModel = this.getUpdateModel(req.body);
    //     const queC = await this.service.updateQuestion(id, UpdateModel);
    //     ResponseHandler.success(req, res, "Successfully updated", 200, queC);
    //   } catch (error: any) {
    //     ResponseHandler.handleError(req, res, error);
    //   }
    // };
    // delete = async (req: express.Request, res: express.Response) => {
    //   try {
    //     const id: number = parseInt(req.params.id);
    //     const isPresent = await this.service.getQuestionById(id);
    //     if (isPresent === null) {
    //       ErrorHandler.throwNotFoundError(
    //         `Question with id ${req.params.id} not found`
    //       );
    //     }
    //     const queC = await this.service.deleteQuestion(id);
    //     const message = "record deleted successfully";
    //     ResponseHandler.success(req, res, message, 200, queC);
    //   } catch (error: any) {
    //     ResponseHandler.handleError(req, res, error);
    //   }
    // };
    // deleteAll = async (req: express.Request, res: express.Response) => {
    //   try {
    //     const queC = await this.service.deleteAllQuestion();
    //     const message = "All records deleted successfully";
    //     ResponseHandler.success(req, res, message, 200, queC);
    //   } catch (error: any) {
    //     ResponseHandler.handleError(req, res, error);
    //   }
    // };
    getUpdateModel(requestBody) {
        const model = {
            question: requestBody.question,
            type: requestBody.type,
            //  ? parseInt(requestBody.age) :undefined,
        };
        return model;
    }
}
exports.QuestionController = QuestionController;
//# sourceMappingURL=node.controller.js.map