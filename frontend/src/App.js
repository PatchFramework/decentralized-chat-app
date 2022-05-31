import './App.css';
import Gun from 'gun'

import ChatRoom from './ChatRoom/ChatRoom';
import Selector from './ChatSelector/Selector';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const gun = Gun({
  peers: ['http:localhost:4050/gun'] // access relay node peer from relay-server.js
})

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={
        <Selector />
        } />
      <Route path="/chatroom/:roomId" exact element={
      <ChatRoom gun={gun} roomId={"messages"} />
      } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
