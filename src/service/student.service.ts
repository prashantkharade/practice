import * as express from 'express'

import { PrismaClient } from '@prisma/client';
import { StudentMapper } from '../mapper/student.mapper';
import { PrismaClientInit } from '../startup/prisma.client.init';


export class StudentService {
    prisma: PrismaClient = null;
    constructor() {
        this.prisma =  PrismaClientInit.instance().getPrismaInstance();
    }

    getStudent = async (_req: express.Request) => {
        const student = await this.prisma.student.findMany({
            include: {
                college: true,
            },
        });
        // return StudentMapper.toArrayDto(student);
        return student;
    };

    getStudentById =  async (id: number) => {
        const student = await this.prisma.student.findUnique({
            where: {
                id: id,
            },
            include: {
                college: true,
            },
        });
        return StudentMapper.toget(student);
        // return student;
        

    }

    createStudent = async (req: express.Request) => {
        const student = await this.prisma.student.create({
            data: {
                name: req.body.name,
                age: parseInt(req.body.age),
            },
        });
        return StudentMapper.toDto(student);
    };


    updateStudent = async (id:any,requestBody:any) => {
        const student = await this.prisma.student.update({
            data: {
                name: requestBody.name,
                age: requestBody.age,
            },
            where: {
                id: parseInt(id),
            },
        });
        return student;
    }
    deleteStudent = async (id: number) => {
        const student = await this.prisma.student.delete({
            where: {
                id: id,
            },
        });
        return student;
    }
}





