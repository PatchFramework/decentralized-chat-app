import './App.css';
import Gun from 'gun'
import {useState} from 'react' 

const gun = Gun({
  peers: ['http:localhost:4050/gun'] // access relay node peer from relay-server.js
})

function App() {
  const [message, setMessage] = useState() // update the webpage if this text changes

  const updateMessage = (event) => {
    let v = event.target.value
    console.log(`Update the message to: ${v}`)
    gun.get('messge').put( // write key-value pair to the database object "message"
      {message: v}
      ) // Edit the value in our db
    setMessage(v) //update the react state and rerender the page
  }

  return (
    <div className="App">
      <input value={message} onChange={updateMessage}></input>
    </div>
  );
}

export default App;
