import { Divider, Drawer, Grid, List} from "@mui/material";
import ChatListHeader from "./ChatListHeader";
import ChatListHeading from "./ChatListHeading";
import SearchChatListItem from "./SearchChatListItem";
const drawerWidth=320
const ChatListDrawer = ()=>{



  return (
    <Grid
      sx={{
        width: { sm: drawerWidth }
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width:  drawerWidth,
          },
        }}
        open
      >
       <ChatListHeader/>
       <Divider/>
       <List>
        <SearchChatListItem/>
        <Divider/>
        <ChatListHeading/>
        <Divider/>
       </List>
      </Drawer>
    </Grid>
  );
}
export default ChatListDrawer;