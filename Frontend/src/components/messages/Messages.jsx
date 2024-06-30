import React from 'react';
import Message from './Message';
import  './MessageContainer.css';


const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto messages-container'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages;

