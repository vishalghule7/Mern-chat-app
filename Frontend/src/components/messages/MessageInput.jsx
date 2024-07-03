import { useState } from "react";
import {BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [message, setMessage]= useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message){
      toast.error("nothing to send");
      return;}
     
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className='px-4 my-3' 
        onSubmit={handleSubmit} >
        <div className='w-full relative'>
            <input type="text" placeholder="Type here..."
            className=' border border-primary text-sm rounded-lg block w-full p-2.5
            bg-gray-700 text-white'
            value={message}
					onChange={(e) => setMessage(e.target.value)}
            />
            
            <button type=' submit' className=' absolute inset-y-0 end-0 flex items-center pe-3'>
              {loading ? <div className='loading loading-spinner'></div> : <BsSend/> }
            </button>
        </div>
    </form>
  )
}

export default MessageInput