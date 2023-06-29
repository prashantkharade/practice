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
const client_1 = require("@prisma/client");
const student_mapper_1 = require("../mapper/student.mapper");
class StudentService {
    constructor() {
        this.prisma = null;
        this.getStudent = (_req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.findMany({
                include: {
                    college: true,
                },
            });
            return student;
        });
        this.getStudentById = (id) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.findUnique({
                where: {
                    id: id,
                },
            });
            return student;
        });
        this.createStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.create({
                data: {
                    name: req.body.name,
                    age: parseInt(req.body.age),
                },
            });
            return student_mapper_1.StudentMapper.toDto(student);
        });
        this.updateStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this.prisma.student.update({
                data: {
                    name: req.body.name,
                    age: parseInt(req.body.age),
                },
                where: {
                    id: parseInt(req.params.id),
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
        this.prisma = new client_1.PrismaClient();
    }
}
exports.StudentService = StudentService;
