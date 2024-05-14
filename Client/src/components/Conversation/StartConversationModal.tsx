import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, useTheme } from "@mui/material"
import CustomButton from "../../Custom/CustomButton"
import CustomTextField from "../../Custom/CustomTextField"
import AddUserListItem from "../../shared/AddUserListItem"
import { useConversationContex } from "../../contexts/ConversationContext"
import NoDataAvailable from "../../shared/NoDataAvailable"
import { StartConversationModalProps, User } from "../../utils/types"


const StartConversationModal = ({open,onClose,type}:StartConversationModalProps) => { 
    const theme=useTheme();
    const {allUsers,searchUserValue,handleSearchUserChange,selectedUserForConversation,setSelectedUserForConversation,groupTitle,setGroupTitle}=useConversationContex();
    const renderUsers=(usersList:User[])=>{
      return usersList?.map((user:User)=><AddUserListItem key={user?.id} user={user} selectedUsers={selectedUserForConversation} setSelectedUsers={setSelectedUserForConversation} 
      type={type}/>)
    }
    function handleClose() {
      onClose();
      setSelectedUserForConversation([]);
      setGroupTitle("");
    }
      return (
<Dialog open={open} onClose={handleClose} maxWidth="lg">
    <DialogTitle color={theme.palette.text.secondary}>Select user to start a conversation</DialogTitle>
    <DialogContent>
    <Grid
          container
          flexDirection="column"
          gap={2}
          sx={{ width: "600px" }}
        >
            <CustomTextField
            size="small"
            placeholder="Search users to start conversation"
            variant="outlined"
          />
          { type==='GROUP' && (<CustomTextField
          required
          label="Group Title"
            size="small"
            placeholder="Please enter a group title"
            variant="outlined"
            value={groupTitle}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
              setGroupTitle(event.target.value)
            }}

          />)}
          <Grid item
            display="flex"
            flexDirection="column"
            gap={1}
            maxHeight="300px"
            sx={{ overflowY: "scroll" }}>
              {allUsers && Array.isArray(allUsers) && allUsers?.length> 0?renderUsers(allUsers):<NoDataAvailable message="No user found"/>}
            </Grid>
        </Grid>
    </DialogContent>
    <DialogActions>
      <CustomButton sx={{color:theme.palette.primary.main}}
      variant="text" onClick={handleClose}>Close</CustomButton>

        <CustomButton disabled={type==='GROUP'? !groupTitle?.trim()?.length || !selectedUserForConversation?.length:!selectedUserForConversation?.length} variant="contained" >Create</CustomButton>

    </DialogActions>
</Dialog>
)
}

export default StartConversationModal