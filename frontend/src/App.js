import './App.css';
import Gun from 'gun'
import { useReducer, useEffect } from 'react';
import ChatRoom from './ChatRoom/ChatRoom';
import Selector from './ChatSelector/Selector';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
            <Selector availableRooms={state} />
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
