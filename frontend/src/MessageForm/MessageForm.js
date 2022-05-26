import React from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useEffect, useRef } from 'react'

function MessageForm(props) {
    //keep focus on the message input field on every rerender
    const inputRef = useRef();
    useEffect(() => {
        if(inputRef.current) inputRef.current.focus(); 
       }, [inputRef]);

    var v = "" //tracks the user input

    const addMessage = () => {

        if (v !== "" && v !== undefined) {
        // read the text from the input box, if the button is clicked
        console.log(`Add the message: ${v}`)
        let dbMessages = props.gun.get(props.roomId)

        // .set will append the message to a list; .put would replace it
        dbMessages.set({
            sender: props.user,
            time: Date.now(),
            data: v
        })
        
        props.setMessage(v) //set the message state and rerender the page
        }
    }

    return (
        <div>
            <Form onSubmit={addMessage}>
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