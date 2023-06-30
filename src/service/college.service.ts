import * as express from 'express'

import { PrismaClient } from '@prisma/client';
import { CollegeMapper } from '../mapper/college.mapper';
import { PrismaClientInit } from '../startup/prisma.client.init';


export class CollegeService {
    prisma: PrismaClient = null;
    constructor() {
        this.prisma =  PrismaClientInit.instance().getPrismaInstance();
    }


    getCollege = async (_req: express.Request) => {
        const college = await this.prisma.college.findMany({
           
        });
        return CollegeMapper.toArrayDto(college);
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


    updateCollege = async (id:any,requestBody:any) => {
        const college = await this.prisma.college.update({
            data:{
                name:requestBody.name,
                studentId:requestBody.studentId,
            },
            where:{
                id:parseInt(id),
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




