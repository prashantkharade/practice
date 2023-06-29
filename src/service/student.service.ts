import * as express from 'express'

import { PrismaClient } from '@prisma/client';
import { StudentMapper } from '../mapper/student.mapper';


export class StudentService {
    prisma: PrismaClient = null;
    constructor() {
        this.prisma = new PrismaClient();
    }

    getStudent = async (_req: express.Request) => {
        const student = await this.prisma.student.findMany({
            include: {
                college: true,
            },
        });
        return student;
    };

    getStudentById = async (id: number) => {
        const student = await this.prisma.student.findUnique({
            where: {
                id: id,
            },
        });
        return student;

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


    updateStudent = async (req: express.Request) => {
        const student = await this.prisma.student.update({
            data: {
                name: req.body.name,
                age: parseInt(req.body.age),
            },
            where: {
                id: parseInt(req.params.id),
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





