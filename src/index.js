require('dotenv').config()
const http = require('http');
const app = require('./config/appConfig');
// const socketConfig = require('./config/socketConfig');

const PORT = process.env.PORT || 5500;

const server = http.createServer(app)
// const io = socketio(server)
// socketConfig(io)

server.listen(PORT, () => console.log('App listening on port:' + PORT))
