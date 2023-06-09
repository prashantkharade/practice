import express from 'express'
export const searchRouter = express.Router();
import { deleteResponse,putResponse,getResponse,postResponse } from '../service/search.service.js';

export const getRequest = async (req, res) => {
    res.send({
        Message: "i am GET from .searchRouter ............!",
        Url: req.baseUrl,
        Method: req.method
    });
}

export const postRequest = async (req, res) => {
    res.send({
        Message: "i am GET from .searchRouter ............!",
        Url: req.baseUrl,
        Method: req.method
    });
}

export const putRequest = async (req, res) => {
    res.send({
        Message: "i am GET from .searchRouter ............!",
        Url: req.baseUrl,
        Method: req.method
    });
}

export const deleteRequest = async (req, res) => {
    res.send({
        Message: "i am GET from .searchRouter ............!",
        Url: req.baseUrl,
        Method: req.method
    });
}



export const postResponse1 = async (req, res) => {
    try {
        const response = await postResponse(req);
        res.send({
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    } catch (error) {
        res.send({
            Message: " not generate the response",
            Url: req.baseUrl,
            Method: req.method
        });
    }
}

export const getResponse1 = async (req, res) => {
    try {
        const response = await getResponse(req);
        res.send({
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    } catch (error) {
        res.send({
            Message: " not generate the response",
            Url: req.baseUrl,
            Method: req.method
        });
    }
}

export const putResponse1 = async (req, res) => {
    try {
        const response = await putResponse(req);
        res.send({
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    } catch (error) {
        res.send({
            Message: " not generate the response",
            Url: req.baseUrl,
            Method: req.method
        });
    }
}

export const deleteResponse1 = async (req, res) => {
    try {
        const response = await deleteResponse(req);
        res.send({
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    } catch (error) {
        res.send({
            Message: " not generate the response",
            Url: req.baseUrl,
            Method: req.method
        });
    }
}
