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
exports.CollegeController = void 0;
const response_handler_1 = require("../common/response.handler");
const error_handler_1 = require("../common/error.handler");
const api_error_1 = require("../common/api.error");
const college_service_1 = require("../service/college.service");
const college_validation_1 = require("../validation/college/college.validation");
class CollegeController {
    constructor() {
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const record = yield this.service.getCollege(req);
                // if (record=== 0) {
                //     ErrorHandler.throwNotFoundError("no record found");
                // }
                const message = "Successfully received the data";
                response_handler_1.ResponseHandler.success(req, res, message, 200, record);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const record = yield this.service.getCollegeById(id);
                if (record === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError("College not found");
                }
                const message = "Successfully received the data";
                response_handler_1.ResponseHandler.success(req, res, message, 200, record);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield college_validation_1.Collegevalidator.validateCreateRequest(req.body);
                let college = yield this.service.createCollege(req);
                if (college === null) {
                    throw new api_error_1.ApiError("Unable to create college.....!", 400);
                }
                const message = "Successfully inserted the college";
                response_handler_1.ResponseHandler.success(req, res, message, 200, college);
            }
            catch (error) {
                console.log("error in catch");
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const isUpdate = yield this.service.getCollegeById(id);
                if (isUpdate === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError(`College with id ${req.params.id} not found`);
                }
                yield college_validation_1.Collegevalidator.validateUpdateRequest(req.body);
                const UpdateModel = this.getUpdateModel(req.body);
                const college = yield this.service.updateCollege(id, UpdateModel);
                response_handler_1.ResponseHandler.success(req, res, "Successfully updated", 200, college);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const isPresent = yield this.service.getCollegeById(id);
                if (isPresent === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError(`College with id ${req.params.id} not found`);
                }
                const college = yield this.service.deleteCollege(id);
                const message = "College record deleted successfully";
                response_handler_1.ResponseHandler.success(req, res, message, 200, college);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.service = new college_service_1.CollegeService();
    }
    getUpdateModel(requestBody) {
        const model = {
            name: requestBody.name,
            studentId: requestBody.studentId ? parseInt(requestBody.studentId) : undefined,
        };
        return model;
    }
}
exports.CollegeController = CollegeController;
