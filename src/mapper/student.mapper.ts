import { StudentDto } from "../domain.types/student/student.domain.types";

export class StudentMapper{
    static toDto = (record:any):StudentDto =>{
        if(record===null){
            return null;
        }

        const dto:StudentDto={
            name:record.name,
            age:record.age,
        };
        return dto;
    }
}