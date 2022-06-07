
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ChatUsername.css"
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const illegalValues = ["", undefined]

function ChatroomUsername(props) {
    // props
    const username = props.userobject
    const setUsername = props.usernameinput
    // store the current value of the input field
    var tempuser = ""

    // navigator to route between components
    const navigate = useNavigate();
    //keep focus on username input field on every rerender
    const inputRef = useRef();
    useEffect(() => {
        if(inputRef.current) inputRef.current.focus(); 
    }, [inputRef]);
    
    // store state of illegal input alert in state and in localStorage 
    const [alert, setAlert] = useState(JSON.parse(window.localStorage.getItem("wrongUsername")) || false) //show or hide bad input alert

    useEffect(() => {
        console.log("change alert to:", alert);
        window.localStorage.setItem("wrongUsername", JSON.stringify(alert))
    }, [alert])
    
    // handle the value of the username input field
    const handleChange = event => {
        tempuser = event.target.value
        // hide alert if user changes username
        if (!(illegalValues.includes(tempuser))) setAlert(false)
        //userlist(tempuser);
        console.log('Current Username is:', tempuser);
    };
    const handleClick = () => {
        console.log("handle click with", alert);
        // show alert if input is not allowed redirect to home page otherwise
        if (illegalValues.includes(tempuser)) setAlert(true)
        else {
            setUsername(tempuser)
            console.log('Username is', tempuser)
            navigate("/home")
        }
    };
    

    return (
    <div class="username-box">
        <h2 class> Choose a username </h2>
        <form onSubmit={handleClick}>
            <div class="user-box">
                {alert && <Alert variant="danger" onClose={() => setAlert(false)} dismissible>This username is not allowed.</Alert>}
                <input type="text" id="username" name="username" onChange={handleChange} ref={inputRef}/>
                <Button variant="success" type='submit'>Submit</Button>
            </div>
        </form>
    </div>
    );
}

export default ChatroomUsername