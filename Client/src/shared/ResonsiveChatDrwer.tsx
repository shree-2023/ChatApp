import { Grid } from '@mui/material'
import ChatListDrawer from '../components/Chat/ChatListDrawer'
import ConversationContainer from '../components/Conversation/ConversationContainer'
import { useConversationContex } from '../contexts/ConversationContext';
const drawerWidth=320;
const ResonsiveChatDrwer = () => {
   const {conversations}=useConversationContex();
  return (
    <Grid container>
  <ChatListDrawer conversations={conversations} drawerWidth ={drawerWidth}/>
  <ConversationContainer drawerWidth ={drawerWidth}/>
    </Grid>
  )
}

export default ResonsiveChatDrwer