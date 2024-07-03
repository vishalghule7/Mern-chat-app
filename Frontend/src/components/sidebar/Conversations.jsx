import useGetConversation from "../../hooks/useGetConversation"
import Conversation from "./Conversation";
import {getRandomEmoji} from '../../utils/emoji'

const Conversations = () => {
  const {loading, conversations}=useGetConversation();
  return (
    <div className=' py-2 flex flex-col overflow-auto 
    h-auto  scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-slate-600 '>

      {conversations.map((conversation,idx) => (
        <Conversation
         key={conversation._id}
         conversation={conversation}
         emoji={getRandomEmoji()}
         lastIdx={idx === conversation.length - 1 }
        />
      ))}


       {loading ? <span className=" loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations