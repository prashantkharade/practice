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
exports.StudentService = void 0;
const student_mapper_1 = require("../mapper/student.mapper");
const prisma_client_init_1 = require("../startup/prisma.client.init");
class StudentService {
    constructor() {
        this.prisma = null;
        this.getStudent = (_req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.findMany({
                include: {
                    college: true,
                },
            });
            // return StudentMapper.toArrayDto(student);
            return student;
        });
        this.getStudentById = (id) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.findUnique({
                where: {
                    id: id,
                },
                include: {
                    college: true,
                },
            });
            return student_mapper_1.StudentMapper.toget(student);
            // return student;
        });
        this.createStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.create({
                data: {
                    name: req.body.name,
                    age: parseInt(req.body.age),
                    college: {
                        create: {
                            name: "pune",
                        },
                    },
                },
            });
            return student_mapper_1.StudentMapper.toDto(student);
        });
        this.updateStudent = (id, requestBody) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.update({
                data: {
                    name: requestBody.name,
                    age: requestBody.age,
                },
                where: {
                    id: parseInt(id),
                },
            });
            return student;
        });
        this.deleteStudent = (id) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.delete({
                where: {
                    id: id,
                },
            });
            return student;
        });
        this.prisma = prisma_client_init_1.PrismaClientInit.instance().getPrismaInstance();
    }
}
exports.StudentService = StudentService;
