
import { Close, Delete, MoreVert } from "@mui/icons-material";
import { AppBar, Avatar, Grid, IconButton, MenuItem, Popover, Toolbar, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import { CustomAppBarProps } from "../utils/types";
const CustomAppBar = ({drawerWidth}:CustomAppBarProps) => {
    const theme=useTheme();
    const [chatMenuAnchorEl,setChatMenuAnchorEl]=useState<HTMLElement|null>(null);
  return (

<>
<AppBar position="fixed" color="transparent" sx={{width:`calc(100% - ${drawerWidth}px)` }}>
    <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
           
            <Grid item display="flex" gap={1} alignItems="center">
            <Avatar/>
            <Grid item>
            
      
                <Typography color={theme.palette.text.secondary}>Conversation title</Typography>
                <Typography variant="caption" color={theme.palette.text.secondary}>online</Typography>

                </Grid>

            </Grid>
            <IconButton sx={{color:theme.palette.text.secondary}} onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
setChatMenuAnchorEl(event.currentTarget);
            }}>
            <MoreVert /></IconButton>
        </Grid>
    </Toolbar>
   </AppBar>
   {Boolean(chatMenuAnchorEl)&&<Popover open={Boolean(chatMenuAnchorEl)} onClose={()=>{
    setChatMenuAnchorEl(null);
   }}
anchorEl={chatMenuAnchorEl} anchorOrigin={{vertical:"bottom",horizontal:"left"}}>
    <MenuItem><Grid item display="flex" alignItems="center" gap={1} >
        <IconButton><Close/></IconButton>
        <Typography color={theme.palette.text.secondary}>Close</Typography>
        </Grid></MenuItem>
        <MenuItem><Grid item display="flex" alignItems="center" gap={1}>
        <IconButton><Delete color="error"/></IconButton>
        <Typography color={theme.palette.text.secondary}>Delete</Typography>
        </Grid></MenuItem>
</Popover>
}
</>
  )
}

export default CustomAppBar