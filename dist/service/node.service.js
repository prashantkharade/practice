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
const prisma_client_init_1 = require("../startup/prisma.client.init");
const node_mapper_1 = require("../mapper/node.mapper");
class QuestionService {
    constructor() {
        this.prisma = null;
        this.getQuestion = (_req) => __awaiter(this, void 0, void 0, function* () {
            const que = yield this.prisma.question.findMany({});
            // return QuestionMapper.toArrayDto(que);
            // return que;
        });
        this.getQuestionById = (id) => __awaiter(this, void 0, void 0, function* () {
            const que = yield this.prisma.node.findUnique({
                where: {
                    id: id,
                },
            });
            return node_mapper_1.QuestionMapper.toDto(que);
            // return student;
        });
        this.createQuestion = (req) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const que = yield this.prisma.node.create({
                data: {
                    nodeType: req.body.NodeType,
                    parentNodeId: req.body.ParentNodeId,
                    title: req.body.Title,
                    description: req.body.Description,
                    sequence: req.body.Sequence,
                    queryType: req.body.QueryType,
                    resolutionScore: req.body.ResolutionScore,
                    providerAssessmentCode: req.body.ProviderAssessmentCode,
                    message: req.body.Message,
                    serveListNodeChildrenAtOnce: req.body.ServeListNodeChildrenAtOnce,
                    scoringApplicable: req.body.ScoringApplicable,
                    options: req.body.Options,
                },
            });
            return node_mapper_1.QuestionMapper.toDto(que);
        });
        this.prisma = prisma_client_init_1.PrismaClientInit.instance().getPrismaInstance();
    }
}
exports.QuestionService = QuestionService;
//# sourceMappingURL=node.service.js.map