import React from 'react'
import './Selector.css'

function Selector() {
  return (
    <div className="box">
      <p className="select">Select a Chatroom or create one</p>
      <form className="form">
        <label className='name'>
          Name:
          <input type="text" name="name" className='input'/>
        </label>
        <label className='chatroom'>
          Chatroom:
          <input type="text" name="name" className='input'/>
        </label>
      </form>
    </div>
  );
}


 export default Selector