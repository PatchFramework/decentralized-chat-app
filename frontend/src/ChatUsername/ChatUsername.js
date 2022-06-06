
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ChatUsername.css"
function ChatroomUsername(props) {

    const username = props.userobject
    const setUsername = props.usernameinput
    var tempuser = ""
    const navigate = useNavigate();
    const handleChange = event => {
        tempuser = event.target.value
        //userlist(tempuser);
        console.log('Current Username is:', tempuser);
    };

    const handleClick = () => {
        setUsername(tempuser)
        console.log('Username is', tempuser);
        navigate("/");
    };

    
    return (
    <div>
        <h2> Choose a username </h2>
        <input type="text" id="username" name="username" onChange={handleChange}/>
        <button onClick={handleClick}>Submit</button>
    </div>
    );
}

export default ChatroomUsername