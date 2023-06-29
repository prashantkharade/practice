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
exports.StudentController = void 0;
const student_service_1 = require("../service/student.service");
const response_handler_1 = require("../common/response.handler");
const error_handler_1 = require("../common/error.handler");
const api_error_1 = require("../common/api.error");
class StudentController {
    constructor() {
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.service.getStudent(req);
                if (student.length === 0) {
                    error_handler_1.ErrorHandler.throwNotFoundError("no record found");
                }
                const message = "Successfully received the data";
                response_handler_1.ResponseHandler.success(req, res, message, 200, student);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const record = yield this.service.getStudentById(id);
                if (record === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Student not found");
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
                console.log("error after try");
                let student = yield this.service.createStudent(req);
                console.log("error after method call");
                if (student === null) {
                    console.log("student not created");
                    throw new api_error_1.ApiError("Unable to create user.....!", 400);
                }
                const message = "Successfully created the student";
                response_handler_1.ResponseHandler.success(req, res, message, 200, student);
            }
            catch (error) {
                console.log("error in catch");
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const isUpdate = yield this.service.getStudentById(id);
                if (isUpdate === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError(`Student with id ${req.params.id} not found`);
                }
                const student = yield this.service.updateStudent(req);
                response_handler_1.ResponseHandler.success(req, res, "Successfully updated", 200, student);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const isPresent = yield this.service.getStudentById(id);
                if (isPresent === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError(`Student with id ${req.params.id} not found`);
                }
                const student = yield this.service.deleteStudent(id);
                const message = "Student record deleted successfully";
                response_handler_1.ResponseHandler.success(req, res, message, 200, student);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.service = new student_service_1.StudentService();
    }
}
exports.StudentController = StudentController;
