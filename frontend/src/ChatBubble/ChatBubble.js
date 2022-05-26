import "./ChatBubble.css"
import RandomColor from "../utility/RandomColor"

import React from 'react'

function ChatBubble({sender, txt, time, isSender, userColors}) {
  const color = userColors[sender]

  return (
    <div className={`bubble-box ${isSender ? 'bubble-right' : 'bubble-left'}`}>
        <div className="sender" style={{color: color}}>{sender}</div>
        <div className="content">{txt}</div>
        <div className="time">{time}</div>
    </div>
  )
}

export default ChatBubble