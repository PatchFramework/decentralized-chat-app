import React from 'react'
import "./ChatRoom.css"

import { useState, useEffect, useReducer } from 'react'
import MessageForm from '../MessageForm/MessageForm';
import TimeConverter from '../utility/TimeConverter';
import ChatHistory from '../ChatHistory/ChatHistory';

const stateMessages = []
const reducer = (state, message) => {
    return [message, ...state]
}

function ChatRoom(props) {
    // save user message and rerender if it is reset
    const [message, setMessage] = useState()

    // reducer updates state and rerenders page if new messages are added
    const [state, dispatch] = useReducer(reducer, stateMessages)

    // Fetch the messages form the database once, on first page render
    useEffect(() => {
        let test = []
        let list = props.gun.get("messages") // can be replaced with the key for the respective chat room, later
        if (list) {
            console.log(list)
            //add all messages in database to stateMessages
            list.map().once((item) => {
                test.push(item.data)
                dispatch({
                    time: item.time,
                    data: item.data
                })
            })
            console.log(test)
        }
    }, [])

    return (
        <div className='ChatRoom'>
            {message && <div>Last sent message: {message}</div>}
            <ChatHistory id="chatHistory" messages={state} />
            <MessageForm gun={props.gun} setMessage={setMessage} />
        </div>
    )
}

export default ChatRoom