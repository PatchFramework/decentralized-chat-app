import './App.css';
import Gun from 'gun'

import ChatRoom from './ChatRoom/ChatRoom';
import Selector from './ChatSelector/Selector';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const gun = Gun({
  peers: ['http:localhost:4050/gun'] // access relay node peer from relay-server.js
})

function App() {
  // save all available chatrooms
  const availableRooms = []
  const addRoom = (dbId, room) => {
    if ( !(room in availableRooms) ) {
      availableRooms.push(room)
    } 
    
  }
  // loop through the "chatrooms" sub-nodes in the DB and add all rooms
  gun.get("chatrooms").map().once(addRoom)
  //console.log("available rooms", availableRooms);

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={
        <Selector availableRooms={availableRooms}/>
        } />
      <Route path="/chatroom/:roomId" exact element={
      <ChatRoom gun={gun} />
      } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
