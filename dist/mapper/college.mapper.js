"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollegeMapper = void 0;
class CollegeMapper {
    static toArrayDto(record) {
        if (record === null) {
            return null;
        }
        const dtos = [];
        record.forEach((element) => {
            dtos.push({
                //id: element.id,
                name: element.name,
                studentId: element.studentId,
            });
        });
        return dtos;
    }
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
