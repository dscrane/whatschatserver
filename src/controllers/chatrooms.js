const express = require('express');
const { ChatRoom } = require('../models/chatroom')
const Message = require('../models/message')

const router = express.Router();


router.get('/chatrooms/fetch', async (req, res) => {
  console.info('rooms/fetch hit')
})

router.post('/chatrooms/create', async (req, res) => {
  console.info('rooms/create hit')
})

router.post('/chatrooms/delete', (req, res) => {
  console.info('rooms/delete hit')
})



module.exports = router;
