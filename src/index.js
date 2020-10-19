require('dotenv').config()
const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const PORT = process.env.PORT || 5500;

const app = express();
const server = http.createServer(app)
const io = socketio(server)
console.log(process.env.NODE_ENV)

app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('chats/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
// })

server.listen(PORT, () => console.log('App listening on port:' + PORT))


io.on('connection', socket => {
  console.log('new websocket connection', socket.id)
  const message = 'This is from the server be happy!'
  socket.emit('connected', message)
})
