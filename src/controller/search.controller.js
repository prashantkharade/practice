import express from 'express'
export const searchRouter = express.Router();
import { deleteResponse, putResponse, getResponse, postResponse } from '../service/search.service.js';

export const getRequest = async (req, res) => {
    res.send({
        Message: "i am GET from .searchRouter ............!",
        Url: req.baseUrl,
        Method: req.method,
        
    });
    console.log("I Am Express framework");
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


import { loginStudent } from '../service/search.service.js';
//***********************************new addition of authorization with middleware ****/
export const Login = async (req, res) => {
    try {
        console.log("we are in search controller");
        let Response = await loginStudent(req);
        console.log("we are in search controller222");
        res.send({
            Message: Response,
            Url: req.baseUrl,
            Method: req.method,
        });
    } catch (error) {
        console.log(error);
        res.send({
            Message: "error",
            Url: req.baseUrl,
            Method: req.method,
        })
    }
}