/* ----   IMPORTS    ---- */
require('dotenv').config()
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const socketio = require('socket.io');

const userController = require('./controllers/users');
const chatroomController = require('./controllers/chatrooms');
const messageController = require('./controllers/messages');

const socketConfig = require('./config/socketConfig');
/* ----   ****    ---- */


/* ----   DEFINE PORT    ---- */
const PORT = process.env.PORT || 5500;
/* ----   ****    ---- */

/* ----   INITIALIZE DATABASE    ---- */
require('./db/db');
/* ----   ****    ---- */

/* ----   CONNECT EXPRESS   ---- */
const app = express();
/* ----   ****    ---- */

/* ----   CONNECT MIDDLEWARES    ---- */
app.use(bodyParser.json())
app.use(cors())
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: "*",
    scriptSrc: ["*", "'unsafe-inline'"],
    imgSrc: ["data:", "https://img.icons8.com/color/48/000000/secured-letter.png"]
    // reportUri: "/my_amazing_csp_report_parser"
  },
  // reportOnly: true
}))
/* ----   ****    ---- */

/* ----   CONNECT CONTROLLERS    ---- */
app.use(userController);
app.use(chatroomController);
app.use(messageController);
/* ----   ****    ---- */

/* ----   CONNECT STATIC FILES    ---- */
app.use(express.static(path.join(__dirname + '/public')))
/* ----   ****    ---- */

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

const server = http.createServer(app)

/* ----   CONNECT SOCKET.IO   ---- */

const io = socketio(server)
socketConfig(io)
/* ----   ****    ---- */


/* ----   SPIN UP THE SERVER    ---- */
server.listen(PORT, () => console.log('App listening on http://localhost:' + PORT))
/* ----   ****    ---- */
