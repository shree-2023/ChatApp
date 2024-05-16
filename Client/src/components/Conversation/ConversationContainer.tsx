// import { Grid, Toolbar } from "@mui/material";
// import CustomAppBar from "../../Custom/CustomAppBar";
// import MessageList from "../Message/MessageList";
// import SendMessageContainer from "../Message/SendMessageContainer";
// import { ConversationContainerProps } from "../../utils/types";

// const ConversationContainer = ({ drawerWidth }:ConversationContainerProps) => {
  
//   return (
//     <Grid
//       sx={{
//         ml : `${drawerWidth}px`}}
//       container
//       flexDirection="column"
//       width="100%"
//     >
//     <CustomAppBar drawerWidth={{drawerWidth}}/>
//     <Toolbar></Toolbar>
//     <MessageList/>
//     <SendMessageContainer/>
//     </Grid>
//   );
// };

// export default ConversationContainer;

import { Grid, Toolbar, useMediaQuery } from "@mui/material";
import CustomAppBar from "../../Custom/CustomAppBar";
import SendMessageContainer from "../Message/SendMessageContainer";
import { ConversationContainerProps } from "../../utils/types";

import MessageList from "../Message/MessageList";
const ConversationContainer = ({ drawerWidth }: ConversationContainerProps) => {
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <Grid
      sx={{
        ml: isTablet ? 0 : `${drawerWidth}px`,
      }}
      container
      flexDirection="column"
      width="100%"
    >
      <CustomAppBar drawerWidth={drawerWidth} />
      <Toolbar />
      <MessageList />
      <SendMessageContainer />
    </Grid>
  );
};

export default ConversationContainer;
