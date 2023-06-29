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
exports.CollegeService = void 0;
const client_1 = require("@prisma/client");
const college_mapper_1 = require("../mapper/college.mapper");
class CollegeService {
    constructor() {
        this.prisma = null;
        this.getCollege = (_req) => __awaiter(this, void 0, void 0, function* () {
            const college = yield this.prisma.college.findMany({});
            return college;
        });
        this.getCollegeById = (id) => __awaiter(this, void 0, void 0, function* () {
            const college = yield this.prisma.college.findUnique({
                where: {
                    id: id,
                },
            });
            return college_mapper_1.CollegeMapper.toDto(college);
        });
        this.createCollege = (req) => __awaiter(this, void 0, void 0, function* () {
            const college = yield this.prisma.college.create({
                data: {
                    name: req.body.name,
                    studentId: parseInt(req.body.studentId),
                },
            });
            return college_mapper_1.CollegeMapper.toDto(college);
        });
        this.updateCollege = (req) => __awaiter(this, void 0, void 0, function* () {
            const college = yield this.prisma.college.update({
                data: {
                    name: req.body.name,
                    studentId: parseInt(req.body.studentId),
                },
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return college_mapper_1.CollegeMapper.toDto(college);
        });
        this.deleteCollege = (id) => __awaiter(this, void 0, void 0, function* () {
            const college = yield this.prisma.college.delete({
                where: {
                    id: id,
                },
            });
            return college_mapper_1.CollegeMapper.toDto(college);
        });
        this.prisma = new client_1.PrismaClient();
    }
}
exports.CollegeService = CollegeService;
