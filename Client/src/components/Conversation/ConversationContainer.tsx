import { Grid, Toolbar } from "@mui/material";
import CustomAppBar from "../../Custom/CustomAppBar";
import MessageList from "../Message/MessageList";
import SendMessageContainer from "../Message/SendMessageContainer";

const ConversationContainer = ({ drawerWidth }) => {
  
  return (
    <Grid
      sx={{
        ml : `${drawerWidth}px`}}
      container
      flexDirection="column"
      width="100%"
    >
    <CustomAppBar drawerWidth={{drawerWidth}}/>
    <Toolbar></Toolbar>
    <MessageList/>
    <SendMessageContainer/>
    </Grid>
  );
};

export default ConversationContainer;