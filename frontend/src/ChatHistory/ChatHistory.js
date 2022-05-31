import React from 'react'

import "./ChatHistory.css"
import TimeConverter from '../utility/TimeConverter'
import ChatBubble from '../ChatBubble/ChatBubble'

import avatarGen from "../utility/AvatarGen"

function ChatHistory(props) {
    // sort messages by timestamp
    // For syntax explanation, see: https://stackoverflow.com/questions/7555025/fastest-way-to-sort-an-array-by-timestamp
    var sortedMessages = props.messages.sort( (x, y) => x.time - y.time)
    let test = 0
    return (
        <div>
            <div className='scrollable-chat'>
                {console.log(props.messages)}
                {sortedMessages && sortedMessages.map((v, k) => {
                    test++
                    if (v.data) {
                        return <ChatBubble key={k} sender={v.sender} txt={v.data} time={TimeConverter(v.time)} isSender={test % 2 == 0 ? true : false} userColors={props.userColors}/>
                    }
                })}
            </div>
        </div>
    )
}

export default ChatHistory