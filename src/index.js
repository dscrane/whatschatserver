/* ----   IMPORTS    ---- */
require('dotenv').config()
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const userController = require('./controllers/users');
const chatroomController = require('./controllers/chatrooms');
const messageController = require('./controllers/messages');

// const socketConfig = require('./config/socketConfig');
/* ----   ****    ---- */


/* ----   DEFINE PORT    ---- */
const PORT = process.env.PORT || 5500;
/* ----   ****    ---- */

/* ----   INITIALIZE DATABASE    ---- */
require('./db/db');
/* ----   ****    ---- */

/* ----   CONNECT EXPRESS AND SOCKET.IO    ---- */
const app = express();
// const io = socketio(server)
// socketConfig(io)
/* ----   ****    ---- */

/* ----   CONNECT MIDDLEWARES    ---- */
app.use(bodyParser.json())
app.use(cors())
/* ----   ****    ---- */

/* ----   CONNECT CONTROLLERS    ---- */
app.use(userController);
app.use(chatroomController);
app.use(messageController);
/* ----   ****    ---- */

/* ----   CONNECT STATIC FILES    ---- */
// app.use(express.static(path.join(__dirname, 'public')))
/* ----   ****    ---- */


const server = http.createServer(app)

/* ----   SPIN UP THE SERVER    ---- */
server.listen(PORT, () => console.log('App listening on http://localhost:' + PORT))
/* ----   ****    ---- */
