import React from 'react'
import ChatroomItem from '../ChatroomItem/ChatroomItem'
import './ChatroomList.css'

function ChatroomList({chatrooms}) {
    console.log("chatrooms in chatroom list is: ", chatrooms);
    return (
    <div className='chatroomList'>
        <div>Chatroom List</div>
        {chatrooms && chatrooms.map( (chatroom) => {
            if ( chatroom ) {
                {console.log("chatrooms", chatrooms)}
                return <ChatroomItem name={chatroom} participants={6}/>
            } else {
                return <div></div>
            }
        }
        )}
    </div>
  )
}

export default ChatroomList