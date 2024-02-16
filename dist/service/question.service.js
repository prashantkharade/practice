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
exports.QuestionService = void 0;
const question_mapper_1 = require("../mapper/question.mapper");
const prisma_client_init_1 = require("../startup/prisma.client.init");
class QuestionService {
    constructor() {
        this.prisma = null;
        this.getQuestion = (_req) => __awaiter(this, void 0, void 0, function* () {
            const que = yield this.prisma.question.findMany({});
            return question_mapper_1.QuestionMapper.toArrayDto(que);
            // return que;
        });
        this.getQuestionById = (id) => __awaiter(this, void 0, void 0, function* () {
            const que = yield this.prisma.question.findUnique({
                where: {
                    id: id,
                },
            });
            return question_mapper_1.QuestionMapper.toDto(que);
            // return student;
        });
        this.createQuestion = (req) => __awaiter(this, void 0, void 0, function* () {
            const que = yield this.prisma.question.create({
                data: {
                    question: req.body.question,
                    type: req.body.type,
                },
            });
            return question_mapper_1.QuestionMapper.toDto(que);
        });
        this.updateQuestion = (id, requestBody) => __awaiter(this, void 0, void 0, function* () {
            const que = yield this.prisma.question.update({
                data: {
                    question: requestBody.question,
                    type: requestBody.type,
                },
                where: {
                    id: parseInt(id),
                },
            });
            return que;
        });
        this.deleteQuestion = (id) => __awaiter(this, void 0, void 0, function* () {
            const que = yield this.prisma.question.delete({
                where: {
                    id: id,
                },
            });
            return que;
        });
        this.deleteAllQuestion = () => __awaiter(this, void 0, void 0, function* () {
            const que = yield this.prisma.question.deleteMany({});
            return que;
        });
        this.prisma = prisma_client_init_1.PrismaClientInit.instance().getPrismaInstance();
    }
}
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map