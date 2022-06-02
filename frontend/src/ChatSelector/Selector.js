import React from 'react'
import './Selector.css'
import { useState } from "react";
import ChatroomList from '../ChatroomList/ChatroomList';

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

function Selector({ availableRooms }) {
  // used to navigate routes in react browserrouter 
  const navigator = useNavigate();
      //keep focus on the message input field on every rerender
      const chatroomRef = useRef();
      var requestedRoom = ""
      const goToRoom = () => {
        navigator(`/chatroom/${requestedRoom}`, { replace: true })
      }

  return (
    <div className="box">
      <p className="select">Select a Chatroom or create one</p>

      <Form onSubmit={goToRoom} className="name">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Chatroom"
                        aria-label="Chatroom"
                        ref={chatroomRef}
                        onChange={(e) => requestedRoom = e.target.value} //save current input to variable v
                    />
                    <Button variant="success" type="submit">
                        Join/Create
                    </Button>
                </InputGroup>
            </Form>

      {/* <form className="form">
        <label className='name'>
          Name:
          <input type="text" name="name" className='input'/>
        </label>
        <label className='chatroom'>
          Create a Chatroom:
          <input type="text" name="name" className='input'/>
        </label>
      </form> */}
      <div className='chatroomHeader'>Chatroom List</div>
      <ChatroomList chatrooms={availableRooms} />
    </div>
  );
}


 export default Selector