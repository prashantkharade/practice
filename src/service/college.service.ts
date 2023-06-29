import * as express from 'express'

import { PrismaClient } from '@prisma/client';
import { CollegeMapper } from '../mapper/college.mapper';

export class CollegeService {
    prisma: PrismaClient = null;
    constructor() {
        this.prisma = new PrismaClient();
    }

    getCollege = async (_req: express.Request) => {
        const college = await this.prisma.college.findMany({
           
        });
        return college;
    }; 

    getCollegeById = async (id: number) => {
        const college = await this.prisma.college.findUnique({
            where: {
                id: id,
            },
        });
        return CollegeMapper.toDto(college);

    }

    createCollege = async (req: express.Request) => {
      const college = await this.prisma.college.create({
        data:{
            name:req.body.name,
            studentId:parseInt(req.body.studentId),
        },
      });
      return CollegeMapper.toDto(college);
    };


    updateCollege = async (req: express.Request) => {
        const college = await this.prisma.college.update({
            data:{
                name:req.body.name,
                studentId:parseInt(req.body.studentId),
            },
            where:{
                id:parseInt(req.params.id),
            },
        });
        return CollegeMapper.toDto(college);
    }


    deleteCollege = async (id: number) => {
        const college = await this.prisma.college.delete({
            where: {
                id: id,
            },
        });
        return CollegeMapper.toDto(college);
    }
}




