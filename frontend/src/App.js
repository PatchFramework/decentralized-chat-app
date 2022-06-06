import './App.css';
import Gun from 'gun'
import { useReducer, useEffect, useState } from 'react';
import ChatRoom from './ChatRoom/ChatRoom';
import Selector from './ChatSelector/Selector';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatroomUsername from './ChatUsername/ChatUsername';

const gun = Gun({
  peers: ['http:localhost:4050/gun'] // access relay node peer from relay-server.js
})

function App() {
  // save all available chatrooms
  const roomState = []
  const addRoom = (state, room) => {
    if (!(room in state)) {
      console.log("adding room: ", room);
      return [room, ...state]
    }
  }
  const [state, dispatch] = useReducer(addRoom, roomState)

  const [username, setUsername] = useState(
    window.localStorage.getItem("username") || "" ,
    )

    useEffect(() => {
      window.localStorage.setItem("username", username)
    }, [username])
  

  useEffect(() => {
    // loop through the "chatrooms" sub-nodes in the DB and add all rooms
    gun.get("chatrooms").map().once((dbId, roomName) => {
      dispatch(roomName)
    })
  }, [])



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={
            <ChatroomUsername  usernameinput={setUsername} userobject={username} />
          } />
          <Route path="/home" exact element={
            <Selector availableRooms={state} />
          } />
          <Route path="/home/chatroom/:roomId" exact element={
            <ChatRoom gun={gun} userobject={username}/>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
