const express = require('express');
const { Chatroom } = require('../models/chatroom')
const Message = require('../models/message')

const router = express.Router();


router.get('/chatrooms/fetch', async (req, res) => {
  console.info('rooms/fetch hit')
  try {
    const chats = await Chatroom.find().limit(8);
    res.send({ chats })
  } catch(e) {
    console.log(e)
  }
})

router.post('/chatrooms/create', async (req, res) => {
  console.info('rooms/create hit')
  res.send('rooms/create hit')
})

router.post('/chatrooms/delete', (req, res) => {
  console.info('rooms/delete hit')
  res.send('rooms/delete hit')
})



module.exports = router;
