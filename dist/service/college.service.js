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
const college_mapper_1 = require("../mapper/college.mapper");
const prisma_client_init_1 = require("../startup/prisma.client.init");
class CollegeService {
    constructor() {
        this.prisma = null;
        this.getCollege = (_req) => __awaiter(this, void 0, void 0, function* () {
            const college = yield this.prisma.college.findMany({});
            return college_mapper_1.CollegeMapper.toArrayDto(college);
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
        this.updateCollege = (id, requestBody) => __awaiter(this, void 0, void 0, function* () {
            const college = yield this.prisma.college.update({
                data: {
                    name: requestBody.name,
                    studentId: requestBody.studentId,
                },
                where: {
                    id: parseInt(id),
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
        this.prisma = prisma_client_init_1.PrismaClientInit.instance().getPrismaInstance();
    }
}
exports.CollegeService = CollegeService;
