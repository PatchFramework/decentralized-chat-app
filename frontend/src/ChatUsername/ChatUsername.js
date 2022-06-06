
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ChatUsername.css"
import Button from 'react-bootstrap/Button'

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
        
    // handle the value of the username input field
    const handleChange = event => {
        tempuser = event.target.value
        //userlist(tempuser);
        console.log('Current Username is:', tempuser);
    };
    const handleClick = () => {
        setUsername(tempuser)
        console.log('Username is', tempuser);
        navigate("/home");
    };
    

    return (
    <div class="username-box">
        <h2 class> Choose a username </h2>
        <form onSubmit={handleClick}>
            <div class="user-box">
                <input type="text" id="username" name="username" onChange={handleChange} ref={inputRef}/>
                <Button variant="success" type='submit'>Submit</Button>
            </div>
        </form>
    </div>
    );
}

export default ChatroomUsername