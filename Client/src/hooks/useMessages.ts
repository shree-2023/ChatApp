import { useState } from "react";
import { deleteMessage, sendMessage } from "../api/messagesApiHandler";
import { useConversationContex } from "../contexts/ConversationContext";
import { useAuthContext } from "../contexts/AuthContext";
import { Message, MessageBody } from "../utils/types";

export default function useMessages(){
    const {currentConversation}=useConversationContex();
    const{loggedInUser}=useAuthContext();
    const[openEmojiPickerEl,setopenEmojiPickerEl]=useState<HTMLElement |null>(null);
    // const [messageBody,setMessageBody]=useState<MessageBody>({
    //     body:"",
    //     fileId:null,
    // fileUrl:null,
    // });
    const [messageBody, setMessageBody] = useState<{
        fileId?: string | null;
        body: string;
        fileUrl?: string | null;
      }>({ body: "", fileId: null, fileUrl: null });
    function handleReset(){
        setMessageBody({fileId:null,fileUrl:null,body:""})
    }
    async function handleSendMessage(){ 
        const senderId=currentConversation?.members?.find(
            (member)=>member?.userId===loggedInUser?.user?.id
        )?.id as string;
    await sendMessage({conversationId:currentConversation?.id as string  ,messageBody,senderId});
    handleReset();
        
    }
    async function handleDeleteMessage(message:Message) {
        await deleteMessage({message})
        
    }
    return {messageBody,setMessageBody,openEmojiPickerEl,
       setopenEmojiPickerEl,handleDeleteMessage,handleSendMessage,}
}