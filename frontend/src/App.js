import './App.css';
import Gun from 'gun'

import ChatRoom from './ChatRoom/ChatRoom';
import Selector from  './ChatSelector/Selector';
import { BrowserRouter, Switch, Route } from "react-router-dom";


const gun = Gun({
  peers: ['http:localhost:4050/gun'] // access relay node peer from relay-server.js
})

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Selector} />
        <div className="App">
          <ChatRoom gun={gun} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
