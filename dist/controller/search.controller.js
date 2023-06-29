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
exports.deleteResponse1 = exports.putResponse1 = exports.getResponse1 = exports.postResponse1 = void 0;
const search_service_js_1 = require("../service/search.service.js");
const postResponse1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, search_service_js_1.postResponse)(req);
        res.send({
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    }
    catch (error) {
        res.send({
            Message: " not generate the response",
            Url: req.baseUrl,
            Method: req.method
        });
    }
});
exports.postResponse1 = postResponse1;
const getResponse1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, search_service_js_1.getResponse)(req);
        res.send({
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    }
    catch (error) {
        res.send({
            Message: " not generate the response",
            Url: req.baseUrl,
            Method: req.method
        });
    }
});
exports.getResponse1 = getResponse1;
const putResponse1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, search_service_js_1.putResponse)(req);
        res.send({
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    }
    catch (error) {
        res.send({
            Message: " not generate the response",
            Url: req.baseUrl,
            Method: req.method
        });
    }
});
exports.putResponse1 = putResponse1;
const deleteResponse1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, search_service_js_1.deleteResponse)(req);
        res.send({
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    }
    catch (error) {
        res.send({
            Message: " not generate the response",
            Url: req.baseUrl,
            Method: req.method
        });
    }
});
exports.deleteResponse1 = deleteResponse1;
