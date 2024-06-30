// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end '>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
//                      alt="avatar profile" />
//             </div>
//         </div>

//         <div className={`chat-bubble text-white bg-blue-500`}>
//             What's up?
//         </div>
//         <time className=" chat-footer flex gap-1 items-center text-xs opacity-50">12:45</time>


//     </div>
//   )
// };

// export default Message;

import React from 'react';

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
                     alt="avatar profile" />
            </div>
        </div>

        <div className='chat-bubble text-white bg-blue-500'>
            What's up?
        </div>
        <time className="chat-footer flex gap-1 items-center text-xs opacity-50">12:45</time>
    </div>
  );
};

export default Message;
