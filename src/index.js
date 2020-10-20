/* ----   IMPORTS    ---- */
require('dotenv').config()
const http = require('http');
const app = require('./config/appConfig');
// const socketConfig = require('./config/socketConfig');
/* ----   ****    ---- */


/* ----   DEFINE PORT    ---- */
const PORT = process.env.PORT || 5500;
/* ----   ****    ---- */

/* ----   INITIALIZE DATABASE    ---- */
require('./db/db');
/* ----   ****    ---- */

/* ----   CONNECT EXPRESS AND SOCKET.IO    ---- */
const server = http.createServer(app)
// const io = socketio(server)
// socketConfig(io)
/* ----   ****    ---- */

/* ----   SPIN UP THE SERVER    ---- */
server.listen(PORT, () => console.log('App listening on port:' + PORT))
/* ----   ****    ---- */
