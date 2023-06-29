import { CollegeDto } from "../domain.types/college/college.domain.types";

export class CollegeMapper {
    static toDto = (record: any): CollegeDto => {
        if (record === null) {
            return null;
        }

        const dto: CollegeDto = {
            name: record.name,
            studentId:record.studentId,

        };
        return dto;
    }
}
