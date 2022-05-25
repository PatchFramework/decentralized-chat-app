import "./ChatBubble.css"

import React from 'react'

function ChatBubble({txt, time, isSender}) {
  return (
    <div className={`bubble-box ${isSender ? 'bubble-right' : 'bubble-left'}`}>
        <div className="content">{txt}</div>
        <div className="time">{time}</div>
    </div>
  )
}

export default ChatBubble