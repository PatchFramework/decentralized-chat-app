import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function MessageForm(props) {
    var v = "" //tracks the user input
    var vs = [] //tracks the messages in the database


    const addMessage = () => {
        // read the text from the input box, if the button is clicked
        console.log(`Add the message: ${v}`)
        let dbMessages = props.gun.get("messages")

        dbMessages.set(v) // .set will append the message to a list; .put would replace it

        props.setMessage(v) //update the react state and rerender the page
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Message"
                    aria-label="Message"
                    //aria-describedby="basic-addon2"
                    onChange={(e) => v = e.target.value} //save current input to variable v
                />
                <Button variant="success" onClick={addMessage} type="submit">
                    Send
                </Button>
            </InputGroup>
        </div>
    )
}

export default MessageForm