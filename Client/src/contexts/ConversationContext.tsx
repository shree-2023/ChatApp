import { Children, useCallback, useContext, useEffect, useState ,createContext} from "react";
import { Conversation, ConversationContextType,ConversationType,User } from "../utils/types";
import { useDebounce } from "../hooks/useDebounce";
import { getAllUsers } from "../api/usersApiHandler";
import { useAuthContext } from "./AuthContext";
import { createConversation, getConversation } from "../api/conversationApiHandler";
import toast from "react-hot-toast";
import { borderRadius, color } from "@mui/system";


export const ConversationContext= createContext<ConversationContextType>({})

export default function ConversationContextProvider({
    children,
  }: {
    children: React.ReactNode;
  }){
    const {loggedInUser}=useAuthContext();
    const [addChatAnchorEl,setAddChatAnchorEl]= useState<HTMLElement | null>(null);
    const [openCreateConversationModal,setOpenCreateConversationModal]=
    useState<{isOpen:Boolean,type:"DIRECT_MESSAGE"|"GROUP"}>({
     isOpen:false,
     type:"DIRECT_MESSAGE",
    });

  
    const [allUsers,setAllUsers] = useState<User[]>([]);
    const[searchUserValue,setSearchUserValue]=useState<string>("");
    const [selectedUserForConversation,setSelectedUserForConversation]=useState<User[]>(()=>loggedInUser?.isAuthenticated && loggedInUser?.user?[loggedInUser?.user]:[]);
    const [groupTitle,setGroupTitle]=useState<string>("");
const[searchConversationValue,setSearchConversationValue]=useState<string>("");
    const [conversations,setConversations]=useState<Conversation[]>([]);

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

      const handleGetConversation = useCallback(
        async (searchConversationValue?: string) => {
          try {
            const response = await getConversation(searchConversationValue);
            setConversations(response);
          } catch (error) {
            console.log(error);
            toast.error(
              error?.toString() ??
                "Failed to fetch conversations please try again ",
              {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              }
            );
          }
        },
        []
      );

      const debouncedSearchUser=useDebounce(handleGetUsers,500);
      const debouncedSearchChat=useDebounce(handleGetConversation,500);

      useEffect(()=>{
        if
        (loggedInUser && loggedInUser?.isAuthenticated && loggedInUser?.user?.id)
{
  if(searchConversationValue){
    debouncedSearchChat(searchConversationValue)
  }
  else{
    handleGetConversation()
  }
}      },[searchConversationValue,loggedInUser,handleGetConversation])

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
    addChatAnchorEl,setAddChatAnchorEl,openCreateConversationModal, setOpenCreateConversationModal,
    selectedUserForConversation,setSelectedUserForConversation,handleSearchUserChange,allUsers,
    groupTitle,setGroupTitle,
    searchConversationValue,setSearchConversationValue,conversations
}}
>
{children}
</ConversationContext.Provider>

      )
  }
  export const useConversationContex=()=>{
    return useContext(ConversationContext)
  };