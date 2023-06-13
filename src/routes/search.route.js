import express from 'express';
import { deleteRequest, getRequest, postRequest, putRequest } from '../controller/search.controller.js';
export const searchRouter = express.Router();

export const searchService = express.Router();
import { getResponse1, deleteResponse1, postResponse1, putResponse1 } from '../controller/search.controller.js';

export const login1 = express.Router();
import { Login } from '../controller/search.controller.js';
import { authorization } from '../common/Authorization.js';


searchRouter.get("/", getRequest);

searchRouter.post("/", postRequest);

searchRouter.put("/", putRequest);

searchRouter.delete("/", deleteRequest);




searchService.get("/", getResponse1);

searchService.post("/", postResponse1);

searchService.put("/", putResponse1);

searchService.delete("/", deleteResponse1);




// login1.get("/", authorization, get);

login1.post("/", Login);

// login1.put("/", authorization, update);

// login1.delete("/", authorization, delete1);
