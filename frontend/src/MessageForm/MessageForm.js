import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useEffect, useRef } from 'react'

const illegalValues = [undefined, ""]

function MessageForm(props) {
    var v = "" //tracks the user input
    
    // store state of illegal input alert in state and in localStorage 
    const [alert, setAlert] = useState(window.localStorage.getItem("wrongMessageAlert") || false) //show or hide bad input alert
    useEffect(() => {
        window.localStorage.setItem("wrongMessageAlert", alert)
    }, [alert])

    //keep focus on the message input field on every rerender
    const inputRef = useRef();
    useEffect(() => {
        if(inputRef.current) inputRef.current.focus(); 
       }, [inputRef]);

    const addMessage = () => {
        console.log("Adding message", v, " from ", props.user, " to chatroom ", props.gunRoom);
        if (!(illegalValues.includes(v))) {
            // read the text from the input box, if the button is clicked
            let dbMessages = props.gunRoom
            
            // save the new message to the database
            // .set will append the message to a list; .put would replace it
            dbMessages.set({
                sender: props.user,
                time: Date.now(),
                data: v
            })
        } else {
            setAlert(true)
        }
    }

    return (
        <div>
            <Form onSubmit={addMessage}>
            {alert && <Alert variant="danger" onClose={() => setAlert(false)} dismissible>Your input is not allowed.</Alert>}
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Message"
                        aria-label="Message"
                        ref={inputRef}
                        onChange={(e) => v = e.target.value} //save current input to variable v
                    />
                    <Button variant="success" type="submit">
                        Send
                    </Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default MessageForm