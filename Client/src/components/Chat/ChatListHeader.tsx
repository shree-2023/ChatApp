// import {
//     Grid,
//     IconButton,
//     Toolbar,
//     Tooltip,
//     Typography,
//     useMediaQuery,
//     useTheme,
//   } from "@mui/material";
//   import React, { useState } from "react";
//   import SettingIcon from "@mui/icons-material/Settings";
//   import { Home } from "@mui/icons-material";
//   import SettingsMenu from "./SettingsMenu";
//   import {
//     useAuthContext,
//     useConversationContext,
//   } from "@/hooks/useAllContextHooks";
  
//   const ChatListHeader = () => {
//     const theme = useTheme();
//     const isTablet = useMediaQuery("(max-width: 768px)");
//     const { handleGoToHome } = useConversationContext()!;
//     const { loggedInUser } = useAuthContext();
//     const [settingsAnchorEl, setSettingsAnchorEl] = useState<HTMLElement | null>(
//       null
//     );
//     return (
//       <Toolbar>
//         <Grid container justifyContent="space-between" alignItems="center">
//           <Tooltip title={loggedInUser?.user?.name} placement="bottom" arrow>
//             <Typography
//               variant="h5"
//               color={theme.palette.text.secondary}
//               maxWidth="65%"
//               noWrap
//             >
//               {loggedInUser?.user?.name ?? ""}
//             </Typography>
//           </Tooltip>
//           <Grid item display="flex" alignItems="center" gap={1}>
//             {!isTablet && (
//               <IconButton
//                 disableRipple
//                 sx={{
//                   bgcolor: theme.palette.primary.main,
//                   color: theme.palette.common.white,
//                 }}
//                 onClick={() => {
//                   handleGoToHome();
//                 }}
//               >
//                 <Home />
//               </IconButton>
//             )}
  
//             <IconButton
//               disableRipple
//               sx={{
//                 bgcolor: theme.palette.primary.main,
//                 color: theme.palette.common.white,
//               }}
//               onClick={(e) => setSettingsAnchorEl(e.currentTarget)}
//             >
//               <SettingIcon />
//             </IconButton>
//           </Grid>
//         </Grid>
//         <SettingsMenu
//           setSettingsAnchorEl={setSettingsAnchorEl}
//           settingsAnchorEl={settingsAnchorEl}
//         />
//       </Toolbar>
//     );
//   };
  
//   export default ChatListHeader;


import { Grid, IconButton, Toolbar, Tooltip, Typography, useScrollTrigger,useTheme } from '@mui/material'
import {Home, Settings} from "@mui/icons-material";
import { useState } from 'react';
import SettingMenu from './SettingMenu';

const ChatListHeader = () => {
    const theme=useTheme();

    const [settingsAnchorEl,setSettingsAnchorEl]=useState<HTMLElement | null>(null);
  return (
    <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
            <Tooltip title="Some very very long name" placement='bottom' arrow>
                <Typography variant='h5' maxWidth="65%"     color={theme.palette.text.secondary} noWrap >
                Some very very long name
                </Typography>
            </Tooltip>
            <IconButton disableRipple
             sx={{bgcolor:theme.palette.primary.main,
                color:theme.palette.common.white,
            }}><Home/></IconButton>
             <IconButton disableRipple 
             sx={{bgcolor:theme.palette.primary.main,
                color:theme.palette.common.white,
            }} onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>
                {
                    setSettingsAnchorEl(event.currentTarget);
                }
            }>
                <Settings/>
            </IconButton>
        </Grid>
        <SettingMenu
         settingsAnchorEl={settingsAnchorEl} setSettingsAnchorEl={setSettingsAnchorEl}/>
    </Toolbar>
  )
}

export default ChatListHeader