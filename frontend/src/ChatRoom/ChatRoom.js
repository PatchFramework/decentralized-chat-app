import React from 'react'

import { useState, useEffect, useReducer } from 'react'
import MessageForm from '../MessageForm/MessageForm';
import TimeConverter from '../utility/TimeConverter';

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
        <div>
            {message && <div>Last sent message: {message}</div>}
            <MessageForm gun={props.gun} setMessage={setMessage}/>
            <div>Database content:</div>
            <ul>
                {console.log(state)}
                {state && state.map((v, k) => {
                    console.log(`database key: ${k} value: ${v}`)
                    return <li key={k}>{TimeConverter(v.time)} - {v.data}</li>
                })}
            </ul></div>
    )
}

export default ChatRoom