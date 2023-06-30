import { StudentDto, StudentToGet } from "../domain.types/student/student.domain.types";

export class StudentMapper {
    static toDto = (record: any): StudentDto => {
        if (record === null) {
            return null;
        }

        const dto: StudentDto = {
            name: record.name,
            age: record.age,
        };
        return dto;
    };


    static toget = (record: any): StudentToGet => {
        if (record === null) {
            return null;
        }

        const getdto: StudentToGet = {
            name: record.name,
            age: record.age,
            college:record.college,
        };
        return getdto;
    };



    static toArrayDto(record: any[]): StudentDto[] {
        if (record === null) {
            return null;
        }

        const dtos: StudentDto[] = [];

        record.forEach((element) => {
            dtos.push({
                id: element.id,
                name: element.name,
                age: element.age,
            });
        });
        return dtos;
    }
}