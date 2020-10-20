const express = require('express');
const bodyParser = require('body-parser')

const userController = require('./controllers/users');
const chatroomController = require('./controllers/chatrooms');
const messageController = require('./controllers/messages');

const appConfig = express();

appConfig.use(express.static(path.join(__dirname, 'client/build')));
appConfig.use(bodyParser.json())

appConfig.use(userController);
appConfig.use(chatroomController);
appConfig.use(messageController);
