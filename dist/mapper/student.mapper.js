"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentMapper = void 0;
class StudentMapper {
}
exports.StudentMapper = StudentMapper;
StudentMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        name: record.name,
        age: record.age,
    };
    return dto;
};
