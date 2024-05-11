
// import { Search } from "@mui/icons-material";
// import { IconButton, ListItem, useTheme } from "@mui/material";
// import React from "react";
// import CustomTextField from "../Custom/CustomTextField";
// import { useConversationContext } from "@/hooks/useAllContextHooks";

// const SearchChatListItem = () => {
//   const theme = useTheme();
//   const { searchConversationValue, setSearchConversationValue } =
//     useConversationContext()!;
//   return (
//     <ListItem>
//       <CustomTextField
//         placeholder="Search chats"
//         size="small"
//         fullWidth
//         variant="outlined"
//         value={searchConversationValue}
//         onChange={(
//           event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//         ) => {
//           setSearchConversationValue(event.target.value);
//         }}
//         InputProps={{
//           endAdornment: (
//             <IconButton
//               sx={{
//                 color: theme.palette.primary.main,
//               }}
//             >
//               <Search />
//             </IconButton>
//           ),
//         }}
//       />
//     </ListItem>
//   );
// };

// export default SearchChatListItem;
import { IconButton, ListItem,useTheme } from '@mui/material'
import CustomTextField from '../../Custom/CustomTextField'
import { Search } from '@mui/icons-material';

const SearchChatListItem = () => {
    const theme = useTheme();
  return (
    <ListItem>
       <CustomTextField 
       placeholder='Search Chats'
       size='small'
       variant='outlined'
       fullWidth
       InputProps={{
          endAdornment: (
            <IconButton
              sx={{
                color: theme.palette.primary.main,
              }}>
              <Search/>
              </IconButton>
          ),
        }}
/>
    </ListItem>
  )
}

export default SearchChatListItem