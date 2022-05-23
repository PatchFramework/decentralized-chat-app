// import express and gun
const express = require('express')
const gun = require('gun')

const app = express()
const port = 4050
app.use(gun.serve)

const server = app.listen(port, () => {
    console.log("Listening on: http://localhost:" + port)
})

gun({web: server}) // will create a gunDB peer/relay-server on localhost:4050