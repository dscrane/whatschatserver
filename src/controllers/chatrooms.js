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
  const chat = new Chatroom(req.body);
  try {
    await chat.save()
    res.send({ chat })
  } catch (e) {
    console.error(e)
  }
})

router.post('/chatrooms/delete', (req, res) => {
  console.info('rooms/delete hit')
  res.send('rooms/delete hit')
})



module.exports = router;
