import { Divider, Drawer, Grid, List} from "@mui/material";
import ChatListHeader from "./ChatListHeader";
import ChatListHeading from "./ChatListHeading";
import SearchChatListItem from "./SearchChatListItem";
import ChatListItem from "./ChatListItem";
import ChatListItems from "./ChatListItems";
const drawerWidth=320
const ChatListDrawer = ({drawerWidth})=>{



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
        <ChatListItem/>
        <ChatListItems/>
        <Divider/>
       </List>
      </Drawer>
    </Grid>
  );
}
export default ChatListDrawer;