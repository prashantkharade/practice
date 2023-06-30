import { CollegeDto } from "../domain.types/college/college.domain.types";

export class CollegeMapper {
    static toDto = (record: any): CollegeDto => {
        if (record === null) {
            return null;
        }

        const dto: CollegeDto = {
            name: record.name,
            studentId: record.studentId,

        };
        return dto;
    }


    static toArrayDto(record: any[]): CollegeDto[] {
        if (record === null) {
            return null;
        }

        const dtos: CollegeDto[] = [];

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
