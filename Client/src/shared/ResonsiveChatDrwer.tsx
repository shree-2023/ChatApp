import { Grid } from '@mui/material'
import ChatListDrawer from '../components/Chat/ChatListDrawer'
import ConversationContainer from '../components/Conversation/ConversationContainer'
import { useConversationContex } from '../contexts/ConversationContext';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NoChatOpen from './NoChatOpen';
const drawerWidth=320;
const ResonsiveChatDrwer = () => {
  const {state}=useLocation()
   const {currentConversation,setCurrentConversation}=useConversationContex();
   useEffect(()=>{
    if(state && state?.type){
      setCurrentConversation && setCurrentConversation(state);
    }
    else{
      setCurrentConversation && setCurrentConversation(null);
    }
   },[state,])
  return (
    <Grid container>
  <ChatListDrawer drawerWidth ={drawerWidth}/>
  {currentConversation && currentConversation?.id ?(
  <ConversationContainer drawerWidth ={drawerWidth}/>
  ):(
    <NoChatOpen drawerWidth={drawerWidth} />//conversation={conversations}
  )}
    </Grid>
  )
}

export default ResonsiveChatDrwer