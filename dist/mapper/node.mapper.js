"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionMapper = void 0;
class QuestionMapper {
}
exports.QuestionMapper = QuestionMapper;
QuestionMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        // id:record.id,
        // question: record.question,
        // type: record.type,
        nodeType: record.nodeType,
        parentNodeId: record.parentNodeId,
        title: record.title,
        description: record.description,
        sequence: record.sequence,
        queryType: record.queryType,
        resolutionScore: record.resolutionScore,
        providerAssessmentCode: record.providerAssessmentCode,
        message: record.message,
        serveListNodeChildrenAtOnce: record.serveListNodeChildrenAtOnce,
        scoringApplicable: record.scoringApplicable,
        options: record.options
    };
    return dto;
};
//# sourceMappingURL=node.mapper.js.map