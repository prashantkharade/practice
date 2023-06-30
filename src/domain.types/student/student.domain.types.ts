import { CollegeDto } from "../college/college.domain.types";

export interface StudentDto {
    id?: number;
    name?: String;
    age?: number;
}

export interface StudentUpdateModel {
    name?: string,
    age?: number,
}


export interface StudentToGet {
    id?: number;
    name?: String;
    age?: number;
    college?: CollegeDto;
}