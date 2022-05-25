import './App.css';
import Gun from 'gun'

import ChatRoom from './ChatRoom/ChatRoom';

const gun = Gun({
  peers: ['http:localhost:4050/gun'] // access relay node peer from relay-server.js
})

function App() {
  
  return (
    <div className="App">
      <ChatRoom gun={gun} />
    </div>
  );
}

export default App;
