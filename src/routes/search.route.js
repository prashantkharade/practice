import express from 'express'
import { deleteRequest, getRequest, postRequest, putRequest } from '../controller/search.controller.js';
export const searchRouter = express.Router();

export const searchService = express.Router();
import { getResponse1,deleteResponse1,postResponse1,putResponse1 } from '../controller/search.controller.js';



searchRouter.get("/", getRequest);

searchRouter.post("/", postRequest);

searchRouter.put("/", putRequest);

searchRouter.delete("/", deleteRequest);




searchService.get("/", getResponse1);

searchService.post("/", postResponse1);

searchService.put("/", putResponse1);

searchService.delete("/", deleteResponse1);
