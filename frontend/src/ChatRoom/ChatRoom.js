import React from 'react'
import "./ChatRoom.css"
import ChatNavbar from '../ChatNavbar/ChatNavbar';
import { useState, useEffect, useReducer } from 'react'
import MessageForm from '../MessageForm/MessageForm';
import TimeConverter from '../utility/TimeConverter';
import RandomColor from '../utility/RandomColor';
import ChatHistory from '../ChatHistory/ChatHistory';
import { useParams } from 'react-router-dom';


function ChatRoom(props) {
    // get the requested room id from the URL parameters
    const { roomId } = useParams();
    const username = props.userobject
    // save the database slot of the chatroom
    const chatroom = props.gun.get("chatrooms").get(roomId)

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
        // can be replaced with the key for the respective chat room, later
        if (chatroom) {
            console.log(chatroom)
            //add all messages in database to stateMessages
            chatroom.map().once((item) => {
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
            <ChatNavbar name={roomId}/>
            <ChatHistory id="chatHistory" messages={state} userColors={userColors} />
            <MessageForm gunRoom={chatroom} user={username} />
        </div>
    )
}

export default ChatRoom