import { Divider, Drawer, Grid, List} from "@mui/material";
import ChatListHeader from "./ChatListHeader";
import ChatListHeading from "./ChatListHeading";
import SearchChatListItem from "./SearchChatListItem";
import ChatListItem from "./ChatListItem";
import ChatListItems from "./ChatListItems";
import { ChatListDrawerProps } from "../../utils/types";
const drawerWidth=320
const ChatListDrawer = ({drawerWidth,conversations}:ChatListDrawerProps)=>(
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
          width: drawerWidth,
        },
      }}
      open
    >
      <ChatListHeader />
      <Divider />
      <List>
        <SearchChatListItem />
        <Divider />
        <ChatListHeading />
        {/* <ChatListItem/> */}
        <ChatListItems conversations={conversations} />
        <Divider />
      </List>
    </Drawer>
  </Grid>
)
export default ChatListDrawer;
// import { Divider, Drawer, Grid, List, useMediaQuery } from "@mui/material";

// import ChatListHeading from "./ChatListHeading";
// import SearchChatListItem from "./SearchChatListItem";
// import ChatListHeader from "./ChatListHeader";
// import ChatListItems from "./ChatListItems";
// import { ChatListDrawerProps } from "../../utils/types";

// const ChatListDrawer = ({ drawerWidth }: ChatListDrawerProps) => {
//   const isTablet = useMediaQuery("(max-width: 768px)");

//   return (
//     <Grid
//       sx={{
//         width: { sm: drawerWidth },
//         flexShrink: { sm: 0 },
//       }}
//     >
//       <Drawer
//         variant="permanent"
//         sx={{
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             width: isTablet ? "100%" : drawerWidth,
//           },
//         }}
//         open
//       >
//         <ChatListHeader />
//         <Divider />
//         <List>
//           <SearchChatListItem />
//           <Divider />
//           <ChatListHeading />
//           <ChatListItems />
//         </List>
//       </Drawer>
//     </Grid>
//   );
// };

// export default ChatListDrawer;