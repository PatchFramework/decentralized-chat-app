import './App.css';
import Gun from 'gun'
import { useState, useEffect } from 'react'
import MessageForm from './MessageForm/MessageForm';

const gun = Gun({
  peers: ['http:localhost:4050/gun'] // access relay node peer from relay-server.js
})

function App() {
  const [message, setMessage] = useState() // update the webpage if this text changes
  const [dbMessages, setDbMessages] = useState()
  useEffect(() => {
    setDbMessages(getMessagesFromDb("messages"))

  }, [])
  const getMessagesFromDb = (dbItem) => {
    let out = []
    let list = gun.get(dbItem)
    if (list) {
      console.log(list)
      //loop through the entries in the database list
      list.map().on((item, id) => {
        // add from db to vs-variable if not empty
        out.push(item)
        console.log(id)
      })
    }
    return out
  }

  return (
    <div className="App">
      <div>Last sent message: {message}</div>
      <MessageForm setMessage={setMessage} gun={gun} />
      <div>Database content:</div>
      <ul>
        {console.log(dbMessages)}
        {dbMessages && dbMessages.map((v, k) => {
          console.log(`database key: ${k} value: ${v}`)
          return <li key={k}>{v}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
