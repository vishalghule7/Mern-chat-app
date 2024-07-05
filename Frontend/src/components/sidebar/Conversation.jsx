import React from 'react';
import useConversation from '../../zustand/useConversations'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx, emoji }) => {

const {selectedConversation ,setSelectedConversation} = useConversation();
const isSelected = selectedConversation?._id === conversation._id;
const {onlineUsers} = useSocketContext();


const isOnline = onlineUsers.includes(conversation._id);
console.log("isonline value=",isOnline);
  return <>

    <div className={`flex gap-2 items-center hover:bg-gray-400 rounded p-2
         cursor-pointer
         ${isSelected ? "bg-gray-400" : ""}
         `}
         onClick={() => setSelectedConversation(conversation)}
         >
        <div className={` avatar  ${isOnline? "online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-serif font-medium text-gray-200'>{conversation.fullName} </p>
                <span className='txt-xl'>{emoji}</span>
            </div>
        </div>
    </div>

    {!lastIdx && <div className='divider my-0 py-0 h-1 '/>}
  </>
  
}

export default Conversation