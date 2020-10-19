require('dotenv').config()
const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const userRouter = require('./routes/userRoutes');
const chatRoomRouter = require('./routes/chatRoomRoutes');
const messageRouter = require('./routes/messageRoutes');


const PORT = process.env.PORT || 5500;

const app = express();
const server = http.createServer(app)
const io = socketio(server)
console.log(process.env.NODE_ENV)

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(userRouter);
app.use(chatRoomRouter);
app.use(messageRouter);


server.listen(PORT, () => console.log('App listening on port:' + PORT))


io.on('connection', socket => {
  console.log('new websocket connection', socket.id)
  const message = 'This is from the server be happy!'
  socket.emit('connected', message)
})
