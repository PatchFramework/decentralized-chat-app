import React, { useEffect, useRef } from 'react'

import "./ChatHistory.css"
import TimeConverter from '../utility/TimeConverter'
import ChatBubble from '../ChatBubble/ChatBubble'

import avatarGen from "../utility/AvatarGen"

function ChatHistory(props) {
    // scroll to the bottom of the chat history
    const endOfChatRef = useRef()
    const scrollBottom = () => {
        endOfChatRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
      }
    useEffect(() => {
        scrollBottom()
      }, [props.messages]);
    
    // sort messages by timestamp
    // For syntax explanation, see: https://stackoverflow.com/questions/7555025/fastest-way-to-sort-an-array-by-timestamp
    var sortedMessages = props.messages.sort( (x, y) => x.time - y.time)

    return (
        <div>
            <div className='scrollable-chat'>
                {console.log("displaying messages:", props.messages)}
                {sortedMessages && sortedMessages.map((v, k) => {
                    if (v.data) {
                        return <ChatBubble key={k} sender={v.sender} txt={v.data} time={TimeConverter(v.time)} isSender={v.sender === props.user ? true : false} userColors={props.userColors}/>
                    }
                })}
                <div ref={endOfChatRef} />
            </div>
        </div>
    )
}

export default ChatHistory