"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollegeMapper = void 0;
class CollegeMapper {
}
exports.CollegeMapper = CollegeMapper;
CollegeMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        name: record.name,
        studentId: record.studentId,
    };
    return dto;
};
