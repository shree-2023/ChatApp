
import express from "express";
import { createMessage, getMessages ,deleteMessage} from "../models/messageModels";


const messageRouter = express.Router();

messageRouter.post("/", getMessages);
messageRouter.post("/create", createMessage);
messageRouter.delete("/delete", deleteMessage);
export default messageRouter;
