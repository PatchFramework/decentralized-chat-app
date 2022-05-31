import "./ChatBubble.css"
import RandomColor from "../utility/RandomColor"
import avatarGen from "../utility/AvatarGen"

import React from 'react'

function ChatBubble({sender, txt, time, isSender, userColors}) {
  const color = userColors[sender]

  return (
    <div className={`bubble-box ${isSender ? 'bubble-right' : 'bubble-left'}`}>
        <div class="d-inline-flex">
          <img src={avatarGen(sender)}/>
          <div className="sender pt-1 ps-1" style={{color: color}}>{sender}</div>
        </div>
        <div className="content">{txt}</div>
        <div className="time">{time}</div>
    </div>
  )
}

export default ChatBubble