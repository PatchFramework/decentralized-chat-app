import React from 'react'
import './ChatroomItem.css'
import { Link } from "react-router-dom"

function ChatroomItem(props) {
  return (
    <Link to={`chatroom/${props.name}`}>
      <div className='chatroomItem'>
        <div className='chatName'>{props.name}</div>
        <div className='participants'>Participants: {props.participants}</div>
      </div>
    </Link>
  )
}

export default ChatroomItem