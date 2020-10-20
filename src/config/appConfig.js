const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const userController = require('./controllers/users');
const chatroomController = require('./controllers/chatrooms');
const messageController = require('./controllers/messages');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json())
app.use(cors())

app.use(userController);
app.use(chatroomController);
app.use(messageController);
