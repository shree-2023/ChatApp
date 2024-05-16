import { Grid } from "@mui/material"
import { useConversationContex } from "../../contexts/ConversationContext"
import MessageCard from "./MessageCard"
import { Message } from "../../utils/types"

const MessageList = () => {
  const {allMessages}=useConversationContex()
  return (
    <Grid
    container
    height={`calc(100vh - 138px)`}
    sx={{
      overflowY: "scroll",
      flexWrap: "nowrap",
    }}
    p={2}
    flexDirection="column"
    gap={1}
  >{allMessages && Array.isArray(allMessages)&& allMessages?.length>0
     && allMessages?.map((message: Message)=>(<MessageCard message={message}/>))}</Grid>
  )
}

export default MessageList