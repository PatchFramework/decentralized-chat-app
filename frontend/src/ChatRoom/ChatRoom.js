import React from 'react'
import "./ChatRoom.css"

import { useState, useEffect, useReducer } from 'react'
import MessageForm from '../MessageForm/MessageForm';
import TimeConverter from '../utility/TimeConverter';
import RandomColor from '../utility/RandomColor';
import ChatHistory from '../ChatHistory/ChatHistory';



function ChatRoom(props) {
    // save user message and rerender if it is reset
    const [userColors, setUserColors] = useState({})

    // reducer updates state and rerenders page if new messages are added
    const stateMessages = []
    const reducer = (state, message) => {
        // assign each new user in state a random username color
        if (!(message.sender in userColors) && message.sender !== undefined) {
            setUserColors({ ...userColors, [message.sender]: RandomColor() })
            console.log("userColors:", userColors);
        }
        return [message, ...state]
    }
    const [state, dispatch] = useReducer(reducer, stateMessages)

    // Fetch the messages for the chat roomId form the database once, on first page render
    useEffect(() => {
        let list = props.gun.get(props.roomId) // can be replaced with the key for the respective chat room, later
        if (list) {
            console.log(list)
            //add all messages in database to stateMessages
            list.map().once((item) => {
                dispatch({
                    sender: item.sender,
                    time: item.time,
                    data: item.data
                })
            })
        }
    }, [])

    return (
        <div className='ChatRoom'>
            <ChatHistory id="chatHistory" messages={state} userColors={userColors} />
            <MessageForm gun={props.gun} roomId={props.roomId} user={"Dieter"} />
        </div>
    )
}

export default ChatRoom