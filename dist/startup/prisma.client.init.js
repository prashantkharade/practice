"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientInit = void 0;
const client_1 = require("@prisma/client");
class PrismaClientInit {
    constructor() {
        this._prisma = null;
        this._prisma = new client_1.PrismaClient();
    }
    static instance() {
        return this._instance || (this._instance = new this());
    }
    getPrismaInstance() {
        return this._prisma;
    }
}
exports.PrismaClientInit = PrismaClientInit;
PrismaClientInit._instance = null;
