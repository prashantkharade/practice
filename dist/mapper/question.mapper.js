"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionMapper = void 0;
class QuestionMapper {
    static toArrayDto(record) {
        if (record === null) {
            return null;
        }
        const dtos = [];
        record.forEach((element) => {
            dtos.push({
                id: element.id,
                question: element.question,
                type: element.type,
            });
        });
        return dtos;
    }
}
exports.QuestionMapper = QuestionMapper;
QuestionMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        question: record.question,
        type: record.type,
    };
    return dto;
};
//# sourceMappingURL=question.mapper.js.map