
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./ChatUsername.css"
import Button from 'react-bootstrap/Button'

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
        navigate("/home");
    };
    

    return (
    <div class="username-box">
        <h2 class> Choose a username </h2>
        <form>
            <div class="user-box">
                <input type="text" id="username" name="username" onChange={handleChange}/>
                <Button variant="success" onClick={handleClick}>Submit</Button>
            </div>
        </form>
    </div>
    );
}

export default ChatroomUsername