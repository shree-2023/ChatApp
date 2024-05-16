import { Divider, Grid, IconButton, Popover, useTheme } from "@mui/material"
import CustomTextField from "../../Custom/CustomTextField"
import { AttachFile, EmojiEmotions, Outbound } from "@mui/icons-material"
import React, { useState } from "react";
import EmojiPicker from "@emoji-mart/react"
import data from '@emoji-mart/data'
import { EmojiData } from "../../utils/types";
import useMessages from "../../hooks/useMessages";

const SendMessageContainer = () => {
    const theme=useTheme();
    const{messageBody,setMessageBody,handleSendMessage,openEmojiPickerEl,setopenEmojiPickerEl}=useMessages();
  return (
  <>
  <Divider/>
  <Grid item px={5}
  py={1} display={"flex"} alignItems="center" gap={2}
  >
    <CustomTextField
    value={messageBody?.body} 
    placeholder="Send Message" fullWidth multiline maxRows={2} size="small" 
    onKeyDown={(event: React.KeyboardEvent<HTMLDivElement | HTMLInputElement>)=>{
      if(
        event.key==="Enter" && ((messageBody?.body && messageBody?.body?.length>0)|| messageBody?.fileId)){
          event.stopPropagation();
          handleSendMessage();
        }
    }}
    InputProps={{startAdornment:(<IconButton sx={{color:theme.palette.success.main}}><AttachFile/></IconButton>),
    endAdornment:(<Grid item display="flex" alignItems="center" gap={1}>
        <IconButton sx={{color:theme.palette.warning.main}} onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
            setopenEmojiPickerEl(event.currentTarget);
        }}><EmojiEmotions/></IconButton>
    <IconButton sx={{color:theme.palette.success.light}}
    onClick={handleSendMessage}
    ><Outbound/></IconButton>
    </Grid>
    )
    }}/>
  </Grid>
  {Boolean(openEmojiPickerEl)&& (<Popover open={Boolean(openEmojiPickerEl)} onClose={()=>{
    setopenEmojiPickerEl(null);
  }}anchorEl={openEmojiPickerEl }>
    <EmojiPicker data={data} onEmojiSelect={(emojiData:EmojiData)=>{
        console.log(emojiData);
        setMessageBody((prev)=>({
          ...prev,body:`${prev?.body} ${emojiData?.native}`
        }))
    }} />
  </Popover>
)}
  </>

  )
}

export default SendMessageContainer