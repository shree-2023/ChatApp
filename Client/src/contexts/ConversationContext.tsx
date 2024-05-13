import { Children, useCallback, useContext, useEffect, useState ,createContext} from "react";
import { ConversationContextType,ConversationType,User } from "../utils/types";
import { useDebounce } from "../hooks/useDebounce";
import { getAllUsers } from "../api/usersApiHandler";
import { create } from "domain";

export const ConversationContext= createContext<ConversationContextType>({})

export default function ConversationContextProvider({
    children,
  }: {
    children: React.ReactNode;
  }){
    const [addChatAnchorEl,setAddChatAnchorEl]= useState<HTMLElement | null>(null);
    const [openCreateConversationModal,setOpenCreateConversationModal]=
    useState<{isOpen:Boolean,type: ConversationType}>({
     isOpen:false,
     type:"DIRECT_MESSAGE",
    });

  
    const [allMessages,setAllUsers] = useState<User[]>([]);
    const[searchUserValue,setSearchUserValue]=useState<string>("");

    const handleGetUsers = useCallback(async (searchUserValue?: string) => {
        const users = await getAllUsers(searchUserValue);
        if (users && Array.isArray(users) && users?.length > 0) {
          setAllUsers(users);
        } else {
          setAllUsers([]);
        }
      }, []);
      function handleSearchUserChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) {
        setSearchUserValue(event.target.value);
      }
      const debouncedSearchUser=useDebounce(handleGetUsers,500);
      useEffect(()=>{
        if(openCreateConversationModal?.isOpen){
            if(searchUserValue){
                debouncedSearchUser(searchUserValue);
            }
            else{
            handleGetUsers();
            }
        }
      },[openCreateConversationModal,searchUserValue,handleGetUsers]);
      return(
    
        

<ConversationContext.Provider
value={{
    addChatAnchorEl,setAddChatAnchorEl,openCreateConversationModal,setOpenCreateConversationModal
}}
>
{children}
</ConversationContext.Provider>

      )
  }
  export const useConversationContex=()=>{
    return useContext(ConversationContext)
  };