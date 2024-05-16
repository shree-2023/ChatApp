import { Avatar, Grid, IconButton, MenuItem, Popover, Typography, useTheme } from '@mui/material'
import { Message, MessageCardProps } from '../../utils/types'
import stringAvatar from '../../utils/stringAvatar'
import { useAuthContext } from '../../contexts/AuthContext'
import { Delete, DoneAll, Height, MoreVert } from '@mui/icons-material'
import dayjs from "dayjs";
import { useState } from 'react'
import useMessages from '../../hooks/useMessages'

const MessageCard = ({message}:MessageCardProps) => {
    const theme=useTheme();
    const {handleDeleteMessage}=useMessages();
    const [messageCardAnchorEl,setMessageCardAnchorEl]= useState<HTMLElement|null>(null);
    const{loggedInUser}=useAuthContext();
  return (
    <>
     <Grid p={1} item display="flex" alignItems="center" gap={2} maxWidth={"35%"}
   alignContent={message?.sender?.userId===loggedInUser?.user?.id?"flex-end":"flex-start"}
   flexDirection={message?.sender?.userId===loggedInUser?.user?.id?'row-reverse':'row'}
   >

    <Avatar src={message.sender?.user?.imageUrl??""}
    {...(message?.sender?.user?.imageUrl?{}:stringAvatar(message?.sender?.user?.name))}/>
   <Grid item display="flex" flexDirection="column" gap={1} p={1} 
   sx={{bgcolor:message?.sender?.userId===loggedInUser?.user?.id?
     theme.palette.primary.main:theme.palette.grey[900],
     borderRadius:4,}}>
        <Grid container spacing={2}>
            <Grid item xs zeroMinWidth>
                <Grid container spacing={2}>
                    <Grid item zeroMinWidth width="100%">
                        <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs zeroMinWidth>
                            <Typography color={theme.palette.text.primary}>{message?.body}</Typography>
                        </Grid>
                        {message?.sender?.userId === loggedInUser?.user?.id && (
                      <Grid item alignSelf="flex-start">
                        <IconButton
                          sx={{ color:theme.palette.common.white }}
                          onClick={(
                            event: React.MouseEvent<
                              HTMLButtonElement,
                              MouseEvent
                            >
                          ) => {
                            setMessageCardAnchorEl(event.currentTarget);
                          }}
                         
                        >
                          <MoreVert />
                        </IconButton>
                      </Grid>
                    )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid
              item
              display="flex"
              alignItems="center"
              gap={1}
              justifyContent="flex-end"
            >
<Typography variant='caption' color={theme.palette.text.primary}>
   {dayjs (message?.createdAt).format("MM DD, YYYY h:mm A")}
</Typography>
<DoneAll sx={{width:16,height:16,color:theme.palette.text.primary}}/>
        </Grid> 
     </Grid>
   </Grid>
   {Boolean(messageCardAnchorEl) && (
        <Popover
          open={Boolean(messageCardAnchorEl)}
          anchorEl={messageCardAnchorEl}
          onClose={() => {
            setMessageCardAnchorEl(null);
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <MenuItem>
            <Grid
              item
              display="flex"
              alignItems="center"
              gap={1}
              onClick={() => {
                handleDeleteMessage(message);
              }}
            >
              <IconButton disableRipple>
                <Delete color="error" />
              </IconButton>
              <Typography color={theme.palette.text.secondary}>
                Delete
              </Typography>
            </Grid>
          </MenuItem>
        </Popover>
      )}
    </>
 
  )
}

export default MessageCard