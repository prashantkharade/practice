"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResponse = exports.putResponse = exports.postResponse = exports.getResponse = void 0;
const getResponse = (_req) => __awaiter(void 0, void 0, void 0, function* () {
    return " get response is from service layer";
});
exports.getResponse = getResponse;
const postResponse = (_req) => __awaiter(void 0, void 0, void 0, function* () {
    return " post response is from service layer";
});
exports.postResponse = postResponse;
const putResponse = (_req) => __awaiter(void 0, void 0, void 0, function* () {
    return " put response is from service layer";
});
exports.putResponse = putResponse;
const deleteResponse = (_req) => __awaiter(void 0, void 0, void 0, function* () {
    return " delete response is from service layer";
});
exports.deleteResponse = deleteResponse;
