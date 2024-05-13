import express from 'express'
import { createConversation, getConversations } from '../models/conversationModel'

const conversationRouter=express.Router()

conversationRouter.post("/",getConversations)
conversationRouter.post("/create",createConversation)

export default conversationRouter