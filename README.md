# decentralized-chat-app
A decentralized chat app that uses peer-to-peer communication without a central server.


## Setup
Install node.js and npm.
Install bootstrap vor visual components.
```bash
npm install -g react-bootstrap bootstrap express gun @dicebear/avatars @dicebear/bottts@5.0.0-alpha.31
```

Afterwards run the following commands in two seperate terminals:

- start the relay-server
```bash
node relay-server/relay-server.js
```

- serve the frontend
```bash
cd frontend
npm start
```